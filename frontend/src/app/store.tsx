import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/authSlice";
import goalReducser from "../goals/goalSlice"

const store = configureStore({
  reducer: {
    auth : authReducer,
    goals : goalReducser
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
