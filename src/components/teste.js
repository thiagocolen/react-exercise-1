import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testeActions } from "../store/teste";
import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";

let usersLoaded = false;

const TesteComponent = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.teste.authToken);
  const usersList = useSelector((state) => state.teste.usersList);

  useEffect(() => {
    dispatch(AuthApi());
  }, [dispatch]);

  useEffect(() => {
    if (usersLoaded === false && token !== null) {
      usersLoaded = true;
      dispatch(UsersApi(token));
    }
  }, [token, dispatch]);

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
      <hr />
      <h3>usersList</h3>
      <ul>
        {usersList &&
          usersList.map((item) => (
            <li key={item.id}>
              <span>pos</span>
              <br />
              <span>{item.image}</span>
              <br />
              <img src={item.image} alt="user avatar" />
              <br />
              <span>{item.name}</span>
              <br />
              <span>{item.balance.points}</span>
              <br />
              <br />
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TesteComponent;
