import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
