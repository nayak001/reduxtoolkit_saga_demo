import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import RootSlice from "./RootSlice";
import RootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: RootSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(RootSaga);
export default store;
