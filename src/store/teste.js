import { createSlice } from "@reduxjs/toolkit";

const initialTesteState = {
  data: 1,
  authToken: null,
  usersList: [],
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
    getUsers(state, action) {
      state.usersList = action.payload;
    },
  },
});

export const testeActions = testeSlice.actions;

export default testeSlice.reducer;
