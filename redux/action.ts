import { AppThunk } from './store';
import { setMoviesInfo } from './movieSlice';
import { getMovieList } from '@/services/movie-service';
import { MoviesData } from '@/models/movie-model';

export const fetchMovies = (page: number): AppThunk => async (dispatch) => {
  try {
    const response: MoviesData | any = await getMovieList(page);

    dispatch(setMoviesInfo(response));
  } catch (error) {
    console.error('Une erreur est survenue lors de la récupération des films :', error);
  }
};
