import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteMovies } from '../redux/favoriteSlice';
import { RootState } from '../redux/store';
import { Movie } from '@/models/movie-model';
import { Link, Typography, styled, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface RecipeReviewCardProps {
    element: Movie;
}

const FixedWidthCard = styled(Card)({
    width: 350,
    margin: '5px 10px',
});

const CardActionsWrapper = styled(CardActions)({
    justifyContent: 'space-between',
});

export default function RecipeReviewCard({ element }: RecipeReviewCardProps) {
    const dispatch = useDispatch();
    const favoriteMovies = useSelector((state: RootState) => state.favorites.favoriteMovies);

    const isFavorite = favoriteMovies.some((movie) => movie.id === element.id);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== element.id)));
        } else {
            dispatch(setFavoriteMovies([...favoriteMovies, element]));
        }
    };

    return (
        <FixedWidthCard sx={{ maxWidth: 350 }}>
            <CardHeader
                titleTypographyProps={{ fontSize: '1em', fontWeight: 'bold' }}
                title={element.title}
            />
            <Box>
                <CardMedia
                component="img"
                image={process.env.NEXT_PUBLIC_IMAGE_PREFIXE + element.poster_path}
                alt="Paella dish"
                />
            </Box>
           

            <CardActionsWrapper disableSpacing>
                <Typography sx={{ margin: '0px 10px' }}>Note: {element.vote_average}</Typography>
                <IconButton aria-label="add to favorites" onClick={handleFavoriteToggle}>
                    {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
                </IconButton>
                <Link href={`/details/${element.id}`}>
                    <IconButton aria-label="view">
                        <VisibilityIcon />
                    </IconButton>
                </Link>
            </CardActionsWrapper>
        </FixedWidthCard>
    );
}
