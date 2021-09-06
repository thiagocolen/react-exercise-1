import { mainActions } from "../store/mainSlice";

export const UserIdApi = (authToken, userId) => {
  return async (dispatch) => {
    const user = async () => {
      const response = await fetch(
        `https://challenge-fielo.herokuapp.com/users/${userId}`,
        {
          method: "GET",
          headers: {
            "x-access-token": authToken,
          },
        }
      );
      const data = await response.json();
      return data;
    };

    try {
      const userDetails = await user();
      dispatch(mainActions.getUserDetail(userDetails));
    } catch (error) {
      console.log(error);
    }
  };
};
