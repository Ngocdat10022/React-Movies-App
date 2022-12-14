const apiKey = "8e19a56f97d894caff6e9e6002a72854";
const tmdbEndPoint = "https://api.themoviedb.org/3/movie";
const tmdnEndPointSearch = "https://api.themoviedb.org/3/search/movie";

const tmdbMovies = {
  getMoviesList: (type, page = 1) => {
    return `${tmdbEndPoint}/${type}?api_key=${apiKey}&language=en-US&page=${page}`;
  },
  getMoviesSearch: (query, page) => {
    return `${tmdnEndPointSearch}?api_key=${apiKey}&query=${query}&page=${page}`;
  },
  getMoviesDetail: (moviesId) => {
    return ` ${tmdbEndPoint}/${moviesId}}?api_key=${apiKey}&language=en-US;`;
  },
  getMoviesMeta: (moviesId, type) => {
    return `${tmdbEndPoint}/${moviesId}/${type}?api_key=${apiKey}&language=en-US`;
  },
  Image500: (url) => `https://image.tmdb.org/t/p/w500${url}`,
};
export default tmdbMovies;
