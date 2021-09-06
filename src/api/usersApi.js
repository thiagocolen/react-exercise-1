import { mainActions } from "../store/mainSlice";

export const UsersApi = (authToken) => {
  return async (dispatch) => {
    const users = async () => {
      const response = await fetch(
        "https://challenge-fielo.herokuapp.com/users",
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
      const usersList = await users();
      dispatch(mainActions.getUsers(usersList));
    } catch (error) {
      console.log(error);
    }
  };
};
