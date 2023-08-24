import React, { useEffect, useState } from "react";
import { Movie } from '@/models/movie-model';
import { getMovie } from '@/services/movie-service';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface MovieDetailsProps {
    movieId: number;
}

export default function Detail({ movieId }: MovieDetailsProps) {
    const [movie, setMovie] = useState<Movie | null>(null);


    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movieData: any = await getMovie(movieId);
                setMovie(movieData);
                console.log(movieData);
            } catch (error) {
                console.error('Erreur lors de la récupération du film :', error);
            }
        };

        // Vérifier si l'ID est disponible avant d'appeler fetchMovie
        if (movieId !== undefined) {
            fetchMovie();
        }

    }, [movieId]);

    if (!movie) {
        return <div>Chargement en cours...</div>;
    }


    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <Card.Img variant="top" src={process.env.NEXT_PUBLIC_IMAGE_PREFIXE + movie.backdrop_path} />
                        </Card>
                    </Col>
                    <Col>
                        <Card.Title style={styles.titre}>{movie.title}</Card.Title>
                        <Card.Text style={styles.description}>
                            {movie.overview}
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const styles = {
    titre:{
        fontSize: "2em",
        color: "orange"
    },
    description:{
        fontSize: "1.2em"
    }
}