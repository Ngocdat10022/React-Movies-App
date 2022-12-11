import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import reducer from "./Reducer";
import logger from "redux-logger";
import rootSaga from "./rootSaga";
const sagaMiddlewaer = createSagaMiddleware();
export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger, sagaMiddlewaer),
});
sagaMiddlewaer.run(rootSaga);
