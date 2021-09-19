import { mainActions } from "../store/mainSlice";
require("dotenv").config();

export const UnsplashApi = () => {
  return async (dispatch) => {
    const unsplashUrlDomain = "https://api.unsplash.com/";
    const backgroundImageData = async () => {
      const response = await fetch(
        `${unsplashUrlDomain}photos/random/?topics=6sMVjTLSkeQ&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      return data;
    };

    try {
      const backgroundImage = await backgroundImageData();
      dispatch(mainActions.getBackgroundImageUrl(backgroundImage.urls.regular));
    } catch (error) {
      console.log(error);
    }
  };
};
