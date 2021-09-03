import { createSlice } from "@reduxjs/toolkit";

const initialTesteState = {
  data: 1,
  authToken: null,
};

const testeSlice = createSlice({
  name: "teste",
  initialState: initialTesteState,
  reducers: {
    increment(state) {
      state.data++;
    },
    getAuth(state, action) {
      state.authToken = action.payload.token;
    },
  },
});

export const testeActions = testeSlice.actions;

export default testeSlice.reducer;
