import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BingApi } from "../api/bingApi";

const BgImageComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(BingApi());
  }, [dispatch]);

  const backgroundImageUrl = useSelector(
    (state) => state.teste.backgroundImageUrl
  );

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

  return <div style={bgImageStyle}></div>;
};

export default BgImageComponent;
