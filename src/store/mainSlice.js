import { createSlice } from "@reduxjs/toolkit";

const formatCurrency = (number) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}

const initialState = {
  data: 1,
  authToken: null,
  usersList: [],
  selectedUserDetails: null,
  userActivitiesList: [],
  selectedUserProgramName: null,
  selectedProgramLevelsList: [],
  backgroundImageUrl: null,
  programLevelMarks: [],
  selectedProgramLevel: null,
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.data++;
    },
    getAuth(state, action) {
      state.authToken = action.payload.token;
    },
    getUsers(state, action) {
      const userList = [...action.payload];
      userList.sort((a, b) => {
        return b.balance.points - a.balance.points;
      });
      state.usersList = userList;
    },
    cleanUserDetailData(state) {
      state.selectedUserDetails = null;
      state.userActivitiesList = [];
      state.selectedUserProgramName = null;
      state.selectedProgramLevelsList = [];
    },
    getUserDetail(state, action) {
      state.selectedUserDetails = action.payload;
      state.selectedUserDetails = {
        ...action.payload,
        balance: {
          ...action.payload.balance,
          formatedCurrency: formatCurrency(action.payload.balance.currency)
        }
      }
    },
    getUserActivities(state, action) {
      state.userActivitiesList = action.payload;
    },
    getProgramName(state, action) {
      state.selectedUserProgramName = action.payload.name;
    },
    getProgramLevels(state, action) {
      state.selectedProgramLevelsList = action.payload;
    },
    getBackgroundImageUrl(state, action) {
      state.backgroundImageUrl = action.payload;
    },
    setProgramLevelMarks(state, action) {
      state.programLevelMarks = action.payload;
    },
    setSelectedProgramLevel(state, action) {
      state.selectedProgramLevel = action.payload;
    }
  },
});

export const mainActions = mainSlice.actions;

export default mainSlice.reducer;
