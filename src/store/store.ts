import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./slices/spaceSlice";

export const store = configureStore({
  reducer: {
    spaces: spaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
