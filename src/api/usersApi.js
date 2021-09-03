import { testeActions } from "../store/teste";

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
      dispatch(testeActions.getUsers(usersList));
    } catch (error) {
      console.log(error);
    }
  };
};
