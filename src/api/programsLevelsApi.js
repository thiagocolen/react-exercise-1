import { testeActions } from "../store/teste";

export const ProgramLevels = (authToken, programId) => {
  return async (dispatch) => {
    const programData = async () => {
      const response = await fetch(
        `https://challenge-fielo.herokuapp.com/programs/${programId}/levels`,
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
        const programLevelsList = await programData();
        dispatch(testeActions.getProgramLevels(programLevelsList));
      } catch (error) {
        console.log(error);
      }
  };
};
