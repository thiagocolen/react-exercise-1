import { mainActions } from "../store/mainSlice";

export const ProgramName = (authToken, programId) => {
  return async (dispatch) => {
    const programData = async () => {
      const response = await fetch(
        `https://challenge-fielo.herokuapp.com/programs/${programId}`,
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
      const programName = await programData();
      dispatch(mainActions.getProgramName(programName));
    } catch (error) {
      console.log(error);
    }
  };
};
