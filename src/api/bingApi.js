import { mainActions } from "../store/mainSlice";

export const BingApi = (authToken, programId) => {
  return async (dispatch) => {
    const backgroundImageData = async () => {
      const response = await fetch(
        `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    };

    try {
      const backgroundImage = await backgroundImageData();
      const backgroundImageURL = `https://www.bing.com/${backgroundImage.images[0].url}`;
      dispatch(mainActions.getBackgroundImageUrl(backgroundImageURL));
    } catch (error) {
      console.log(error);
    }
  };
};
