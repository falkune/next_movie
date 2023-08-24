import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '@/models/movie-model';

// Définit le type de l'état pour le slice des favoris
interface FavoriteState {
  favoriteMovies: Movie[]; // Un tableau de films
}

// Définit l'état initial du slice des favoris
const initialState: FavoriteState = {
  favoriteMovies: [], // Au départ, la liste des favoris est vide
};

// Crée un slice Redux appelé "favorites"
const favoriteSlice = createSlice({
  name: 'favorites', // Nom du slice
  initialState, // État initial
  reducers: {
    // Réducteur pour l'action "setFavoriteMovies"
    setFavoriteMovies: (state, action: PayloadAction<Movie[]>) => {
      // Met à jour l'état avec le tableau de films fourni dans l'action
      state.favoriteMovies = action.payload;
    },
  },
});

// Exporte l'action "setFavoriteMovies"
export const { setFavoriteMovies } = favoriteSlice.actions;

// Exporte le réducteur du slice des favoris
export default favoriteSlice.reducer;
