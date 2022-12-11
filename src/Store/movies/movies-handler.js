import { call, put } from "redux-saga/effects";
import {
  requestMovies,
  requestMoviesCredits,
  requestMoviesDetails,
  requestMoviesSimilar,
  requestMoviesTrailer,
  requestSearchMovies,
} from "./movies-request";
import {
  getUpCommingSuccess,
  getMoviesNowPlayingSuccess,
  getMoviesTopRatedSuccess,
  getMoviesSearchSuccess,
  setLoading,
  getMoviesCreditsSuccess,
  getMoviesDetailsSuccess,
  getMoviesTrailerSuccess,
  getMoviesSimilarSuccess,
} from "./movies-silce";
const sleep = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
function* handleGetMoviesUpComing(action) {
  const { payload } = action;
  console.log(payload.type);
  const res = yield call(requestMovies, payload.type);
  const data = res.data.results;
  yield put(getUpCommingSuccess({ data: data }));
}
function* handleGetMoviesNowPlaying(action) {
  const { payload } = action;
  console.log(payload.type);
  const res = yield call(requestMovies, payload.type);
  const data = res.data.results;
  yield put(getMoviesNowPlayingSuccess({ data: data }));
}
function* handleGetMoviesTopRated(action) {
  const { payload } = action;
  console.log(payload.type);
  const res = yield call(requestMovies, payload.type);
  const data = res.data.results;
  yield put(getMoviesTopRatedSuccess({ data: data }));
}
function* handleSearchMovies(action) {
  const { payload } = action;
  const res = yield call(requestSearchMovies, payload.query);
  console.log("responed", res);
  yield put(setLoading(true));
  const data = res.data.results;
  yield sleep(2000);
  if (!!data) yield put(getMoviesSearchSuccess({ data: data }));
  yield put(setLoading(false));
}
function* handleGetMoviesDetails(action) {
  const { payload } = action;
  const res = yield call(requestMoviesDetails, payload.id);
  const data = res.data;
  if (!!data) yield put(getMoviesDetailsSuccess({ data: data }));
}
function* handleGetMoviesCredits(action) {
  const { payload } = action;
  const res = yield call(requestMoviesCredits, payload.id);
  const dataCredits = res.data.cast;
  yield put(getMoviesCreditsSuccess({ data: dataCredits }));
}

function* handleGetMoviesTrailer(action) {
  const { payload } = action;
  const res = yield call(requestMoviesTrailer, payload.id);
  const dataTrailer = res.data.results;
  yield put(getMoviesTrailerSuccess({ data: dataTrailer }));
}
function* handleGetMoviesSimilar(action) {
  const { payload } = action;
  const res = yield call(requestMoviesSimilar, payload.id);
  console.log(res);
  const dataSimilar = res.data.results;
  yield put(getMoviesSimilarSuccess({ data: dataSimilar }));
}
export {
  handleGetMoviesUpComing,
  handleGetMoviesNowPlaying,
  handleGetMoviesTopRated,
  handleSearchMovies,
  handleGetMoviesDetails,
  handleGetMoviesCredits,
  handleGetMoviesTrailer,
  handleGetMoviesSimilar,
};
