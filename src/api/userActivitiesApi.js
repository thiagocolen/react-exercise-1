import { mainActions } from "../store/mainSlice";

export const UserActivitiesApi = (authToken, userId) => {
  return async (dispatch) => {
    const userActivities = async () => {
      const response = await fetch(
        `https://challenge-fielo.herokuapp.com/users/${userId}/activities`,
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
      const userActivitiesList = await userActivities();
      dispatch(mainActions.getUserActivities(userActivitiesList));
    } catch (error) {
      console.log(error);
    }
  };
};
