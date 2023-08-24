import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MoviesData } from '@/models/movie-model';

// Définit une interface MovieState pour représenter l'état de ce slice
interface MovieState {
  moviesInfo: MoviesData;
}

// Définit l'état initial de ce slice
const initialState: MovieState = {
  moviesInfo: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
};

// Utilise createSlice pour créer le slice "movies"
const movieSlice = createSlice({
  name: 'movies', // Nom du slice
  initialState, // État initial
  reducers: {
    // Réducteur pour l'action "setMoviesInfo" Cela signifie que lorsque vous déclenchez l'action setMoviesInfo vous pouvez lui passer des données de type MoviesData
    setMoviesInfo: (state, action: PayloadAction<MoviesData>) => {
      // Met à jour l'état avec les données fournies dans action
      state.moviesInfo = action.payload;
    },
  },
});

// Exporte l'action "setMoviesInfo"
export const { setMoviesInfo } = movieSlice.actions;
// Exporte le réducteur du slice "movies"
export default movieSlice.reducer;
