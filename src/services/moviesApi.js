import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTk3ZGIyNGJmMjAxMzE4NmI2YzgyZjlmZWZiYmIwNCIsIm5iZiI6MTc0NTA3NDU2MS4wMjIsInN1YiI6IjY4MDNiOTgxMjM2OGIxMmIxNzk5NTRmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W1lnQ3oTW3SiwgMhL_ny8JEuOPrQcx7NEaMckZpAH-A",
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`${API_URL}/trending/movie/day`, options);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(`${API_URL}/search/movie`, {
    ...options,
    params: { query },
  });
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(`${API_URL}/movie/${movieId}`, options);
  return data;
};

export const getMovieCredits = async (movieId) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${movieId}/credits`,
    options
  );
  return data;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axios.get(
    `${API_URL}/movie/${movieId}/reviews`,
    options
  );
  return data;
};
