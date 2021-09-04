import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testeActions } from "../store/teste";
import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";
import { UserIdApi } from "../api/userIdApi";
import { UserActivities } from "../api/userActivitiesApi";
import { ProgramName } from "../api/programNameApi";

let usersLoaded = false;

const TesteComponent = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.teste.authToken);
  const usersList = useSelector((state) => state.teste.usersList);
  const selectedUserDetails = useSelector(
    (state) => state.teste.selectedUserDetails
  );
  const userActivitiesList = useSelector(
    (state) => state.teste.userActivitiesList
  );

  const selectedUserProgramName = useSelector(
    (state) => state.teste.selectedUserProgramName
  );

  useEffect(() => {
    dispatch(AuthApi());
  }, [dispatch]);

  useEffect(() => {
    if (usersLoaded === false && token !== null) {
      usersLoaded = true;
      dispatch(UsersApi(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (selectedUserDetails) {
      dispatch(ProgramName(token, selectedUserDetails.programId));
    }
  }, [token, selectedUserDetails, dispatch]);

  const testeData = useSelector((state) => {
    return state.teste.data;
  });

  const addHandler = () => {
    dispatch(testeActions.increment());
  };

  const userDetailHandler = (event) => {
    const userId = event.target.attributes.value.value;
    dispatch(UserIdApi(token, userId));
    dispatch(UserActivities(token, userId));
  };

  return (
    <div>
      <h1>teste componente</h1>
      <h2>{testeData}</h2>
      <button onClick={addHandler}>add</button>
      <hr />
      <h4>selectedUserProgramName</h4>
      <span>{selectedUserProgramName}</span>
      <hr />
      <h3>userActivitiesList</h3>
      <ul>
        {userActivitiesList &&
          userActivitiesList.map((item) => (
            <li key={item.id}>
              <span>date:{item.date}</span>
              <br />
              <span>description:{item.description}</span>
            </li>
          ))}
      </ul>
      <hr />
      <h3>selectedUserDetails</h3>
      {selectedUserDetails && (
        <div className="user-details">
          <span>{selectedUserDetails.id}</span>
          <br />
          <span>{selectedUserDetails.name}</span>
          <br />
          {selectedUserProgramName && (
            <Fragment>
              <span>{selectedUserProgramName}</span>
              <br />
            </Fragment>
          )}
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
