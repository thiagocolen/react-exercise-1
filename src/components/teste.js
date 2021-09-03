import { useDispatch, useSelector } from "react-redux";
import { testeActions } from '../store/teste';

const TesteComponent = () => {
  const dispatch = useDispatch();
  const testeData = useSelector((state) => {
    return state.teste.data;
  });

  const addHandler = () => {
      dispatch(testeActions.increment());
  }

  return (
    <div>
      <h1>teste componente</h1>
      <h2>{testeData}</h2>
      <button onClick={addHandler}>add</button>
    </div>
  );
};

export default TesteComponent;
