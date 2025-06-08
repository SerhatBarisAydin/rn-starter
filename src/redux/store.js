import { configureStore } from "@reduxjs/toolkit";
//userSlice... burada olduğu gibi slice'lar reducer olarak çağırılır(okunaklı olması için)
import userReducer from "./userSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    //oluşturulan slice'lar  buraya eklenip import edilecek
    user: userReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
