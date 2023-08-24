import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import favoriteReducer from './favoriteSlice';

// Combiner les réducteurs individuels en un seul réducteur racine
const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
});

// Configurer le store Redux avec le réducteur racine
const store = configureStore({
  reducer: rootReducer,
});

// Obtenir le type de l'état global à partir du store
export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// Définir le type pour les actions asynchrones (thunks) en utilisant ThunkAction
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Exporter le store par défaut pour être utilisé dans d'autres parties de votre application
export default store;
