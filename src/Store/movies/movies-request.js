import axios from "axios";
export const requestMovies = (type) => {
  console.log(type);
  return axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=8e19a56f97d894caff6e9e6002a72854&language=en-US`
  );
};

export const requestSearchMovies = (query = "spiderman", page = 1) => {
  console.log(query);
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=8e19a56f97d894caff6e9e6002a72854&query=${query}&page=${page}`
  );
};

export const requestMoviesDetails = (id) => {
  console.log("id", id);
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=8e19a56f97d894caff6e9e6002a72854&language=en-US`
  );
};

export const requestMoviesCredits = (id) => {
  console.log("id", id);
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8e19a56f97d894caff6e9e6002a72854&language=en-US`
  );
};
export const requestMoviesTrailer = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=8e19a56f97d894caff6e9e6002a72854&language=en-US`
  );
};

export const requestMoviesSimilar = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=8e19a56f97d894caff6e9e6002a72854&language=en-US`
  );
};
