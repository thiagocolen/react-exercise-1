import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BingApi } from "../api/bingApi";

const BgImageComponent = () => {
  const dispatch = useDispatch();

  const backgroundImageUrl = useSelector(
    (state) => state.mainReducer.backgroundImageUrl
  );

  useEffect(() => {
    dispatch(BingApi());
  }, [dispatch]);

  const bgImageStyle = {
    backgroundImage: "url(" + backgroundImageUrl + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    zIndex: "-1",
  };

  return <div data-testid="bg-image-component" style={bgImageStyle}></div>;
};

export default BgImageComponent;
