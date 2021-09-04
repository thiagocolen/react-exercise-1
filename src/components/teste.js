import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testeActions } from "../store/teste";
import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";
import { UserIdApi } from "../api/userIdApi";

let usersLoaded = false;

const TesteComponent = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.teste.authToken);
  const usersList = useSelector((state) => state.teste.usersList);
  const selectedUserDetails = useSelector((state) => state.teste.selectedUserDetails);

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

  const userDetailHandler = (event) => {
    const userID = event.target.attributes.value.value;
    dispatch(UserIdApi(token, userID));
  };

  return (
    <div>
      <h1>teste componente</h1>
      <h2>{testeData}</h2>
      <button onClick={addHandler}>add</button>
      <hr />
      <h3>selectedUserDetails</h3>
      {selectedUserDetails && (
        <div className="user-details">
          <span>{selectedUserDetails.id}</span>
          <br />
          <span>{selectedUserDetails.name}</span>
          <br />
          <span>{selectedUserDetails.image}</span>
          <br />
          <span>{selectedUserDetails.programId}</span>
          <br />
          <span>{selectedUserDetails.levelId}</span>
          <br />
          <span>{selectedUserDetails.balance.points}</span>
          <br />
          <span>{selectedUserDetails.balance.miles}</span>
          <br />
          <span>{selectedUserDetails.balance.currency}</span>
          <br />
        </div>
      )}

      <hr />
      <h3>usersList</h3>
      <ul>
        {usersList &&
          usersList.map((item) => (
            <li key={item.id} value={item.id} onClick={userDetailHandler}>
              <span>ID:{item.id}</span>
              <br />
              <span>pos</span>
              <br />
              <span>IMAGE:{item.image}</span>
              <br />
              <img src={item.image} alt="user avatar" />
              <br />
              <span>NAME:{item.name}</span>
              <br />
              <span>POINTS:{item.balance.points}</span>
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
