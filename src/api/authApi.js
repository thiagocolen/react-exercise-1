import { mainActions } from "../store/mainSlice";

export const AuthApi = () => {
  return async (dispatch) => {
    const auth = async () => {
      const response = await fetch(
        "https://challenge-fielo.herokuapp.com/auth",
        {
          method: "POST",
          headers: {
            "x-app-id":
              "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCh7uxHjWd1CyRgPD4XHcIPKiDb",
          },
        }
      );
      const data = await response.json();
      return data;
    };

    try {
      const authToken = await auth();
      dispatch(mainActions.getAuth(authToken));
    } catch (error) {
      console.log(error);
    }
  };
};
