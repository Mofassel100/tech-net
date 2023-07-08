import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./fautures/counter/counterSlice";
import logger from "./middleWere/Middlewere";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
