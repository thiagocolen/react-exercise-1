import { createSlice } from "@reduxjs/toolkit";

const initialTesteState = {
  data: 1,
  authToken: null,
  usersList: [],
  selectedUserDetails: null,
  userActivitiesList: [],
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
    getUserDetail(state, action) {
      state.selectedUserDetails = action.payload;
    },
    getUserActivities(state, action) {
      state.userActivitiesList = action.payload;
    },
  },
});

export const testeActions = testeSlice.actions;

export default testeSlice.reducer;
