export class Movie {
    adult!: boolean;
    backdrop_path!: string;
    genre_ids!:number[];
    id!: number;
    original_language!: string;
    original_title!: string;
    overview!: string;
    popularity!: number;
    poster_path!: string;
    release_date!: Date;
    title!: string;
    video!: boolean;
    vote_average!: number;
    vote_count!: number;
}


export class MoviesData {
    page!: number;
    results!: Movie[];
    total_pages!: number;
    total_results!: number;
}

// export class MoviesData {
//     currentPage!: number;
//     moviesData!: Movie[];
//     totalPages!: number;
//     totalResults!: number;
//   }