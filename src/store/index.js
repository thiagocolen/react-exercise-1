import { configureStore } from "@reduxjs/toolkit";

import mainReducer from "./mainSlice";

const store = configureStore({
  reducer: {
    mainReducer,
  },
});

export default store;
