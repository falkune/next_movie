import React from "react";
import { useSelector } from 'react-redux';
import RecipeReviewCard from "./Movie";
import { Movie } from "@/models/movie-model";
import { Alert, AlertTitle, Box } from "@mui/material";
import { RootState } from '../redux/store';

const FavoriteMovies = () => {
    const favoriteMovies = useSelector((state: RootState) => state.favorites.favoriteMovies);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Liste des favoris</h1>
            <div style={styles.container}>
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((element: Movie) => (
                        <RecipeReviewCard key={element.id} element={element} />
                    ))
                ) : (
                    <Alert severity="info">
                        <AlertTitle>Info</AlertTitle>
                        Vous n'avez pas encore ajouté de favoris.
                    </Alert>
                )}
            </div>
        </Box>
    )
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    } as React.CSSProperties,
}

export default FavoriteMovies;
