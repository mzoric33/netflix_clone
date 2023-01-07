<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
=======
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
>>>>>>> b82126d1bd980106d94db760c0c53b107a66669e
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
