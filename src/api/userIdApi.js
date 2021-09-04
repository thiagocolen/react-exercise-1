import { testeActions } from "../store/teste";

export const UserIdApi = (authToken, userId) => {
  debugger;
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
      dispatch(testeActions.getUserDetail(userDetails));
    } catch (error) {
      console.log(error);
    }
  };
};
