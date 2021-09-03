import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testeActions } from "../store/teste";
import { AuthApi } from "../api/authApi";

const TesteComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AuthApi());
  }, [dispatch]);

  const testeData = useSelector((state) => {
    return state.teste.data;
  });

  const addHandler = () => {
    dispatch(testeActions.increment());
  };

  return (
    <div>
      <h1>teste componente</h1>
      <h2>{testeData}</h2>
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default TesteComponent;
