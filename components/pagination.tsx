import { MoviesData } from "@/models/movie-model";
import { fetchMovies } from "@/redux/action";
import { RootState } from "@/redux/reducers";
import { AppDispatch } from "@/redux/store";
import { Stack, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function BasicPagination() {
    const moviesInfo = useSelector((state: RootState) => state.movies.moviesInfo);
    const dispatch: AppDispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(fetchMovies(currentPage));
    }, [currentPage, dispatch]);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <Stack spacing={2} sx={{ margin: "30px 0" }}>
            <Pagination count={moviesInfo.total_pages} color="primary" onChange={handlePageChange} />
        </Stack>
    );
}



