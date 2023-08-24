// 1)
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Movie } from '@/models/movie-model';
import { Box } from "@mui/material";
import RecipeReviewCard from './Movie';
import BasicPagination from './pagination';
import movieStyles from '../public/css/movie.module.css'

const MovieList = () => {
  // Utilisez useSelector pour extraire l'état des films depuis le store global
  const moviesInfo = useSelector((state: RootState) => state.movies.moviesInfo);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60%' }}>
      <h1>Movie List</h1>
      <div className={movieStyles.container}>
        {moviesInfo.results.map((element: Movie) => (
          <RecipeReviewCard key={element.id} element={element} />
        ))}
      </div>
      <BasicPagination />
    </Box>
  );
};

export default MovieList;
