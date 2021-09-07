import api from './api';

const apiKey = "api_key=6d31fff9630bbd49030d7e1756bd2654";

export const getTrending = (page) => {
    const url = `trending/movie/week?${apiKey}&page=${page}`;
    return api.get(url);
}

export const getMovie = (movie_id) => {
    const url = `movie/${movie_id}?${apiKey}`;
    return api.get(url);
}

export const getGenres = () => {
    const url = `genre/movie/list?${apiKey}`;
    return api.get(url);
}

