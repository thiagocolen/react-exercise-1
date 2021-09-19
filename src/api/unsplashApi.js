import { mainActions } from "../store/mainSlice";


export const UnsplashApi = () => {

  return async (dispatch) => {
    const backgroundImageData = async () => {
      const response = await fetch(`https://api.unsplash.com/photos/random/?topics=6sMVjTLSkeQ&client_id=????`, {
        method: "GET",
      });
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
