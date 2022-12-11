import { takeEvery } from "redux-saga/effects";
import {
  handleGetMoviesUpComing,
  handleGetMoviesNowPlaying,
  handleGetMoviesTopRated,
  handleSearchMovies,
  handleGetMoviesDetails,
  handleGetMoviesCredits,
  handleGetMoviesTrailer,
  handleGetMoviesSimilar,
} from "./movies-handler";
import {
  getMovies,
  getMoviesNowPlaying,
  getMoviesTopRated,
  getMoviesSearch,
  getMoviesDetails,
  getMoviesCredits,
  getMoviesTrailer,
  getMoviesSimilar,
} from "./movies-silce";

export default function* moviesSaga() {
  yield takeEvery(getMovies.type, handleGetMoviesUpComing);
  yield takeEvery(getMoviesNowPlaying.type, handleGetMoviesNowPlaying);
  yield takeEvery(getMoviesTopRated.type, handleGetMoviesTopRated);
  yield takeEvery(getMoviesSearch.type, handleSearchMovies);
  yield takeEvery(getMoviesDetails.type, handleGetMoviesDetails);
  yield takeEvery(getMoviesCredits.type, handleGetMoviesCredits);
  yield takeEvery(getMoviesTrailer.type, handleGetMoviesTrailer);
  yield takeEvery(getMoviesSimilar.type, handleGetMoviesSimilar);
}
