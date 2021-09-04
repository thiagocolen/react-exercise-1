import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testeActions } from "../store/teste";
import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";
import { UserIdApi } from "../api/userIdApi";
import { UserActivitiesApi } from "../api/userActivitiesApi";
import { ProgramName } from "../api/programNameApi";
import { ProgramLevels } from "../api/programsLevelsApi";
import { BingApi } from "../api/bingApi";

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

  const selectedProgramLevelsList = useSelector(
    (state) => state.teste.selectedProgramLevelsList
  );

  const backgroundImageUrl = useSelector(
    (state) => state.teste.backgroundImageUrl
  );

  useEffect(() => {
    dispatch(AuthApi());
    dispatch(BingApi());
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
      dispatch(ProgramLevels(token, selectedUserDetails.programId));
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
    dispatch(testeActions.cleanUserDetailData());
    dispatch(UserIdApi(token, userId));
    dispatch(UserActivitiesApi(token, userId));
  };

  return (
    <div style={{ backgroundImage: "url(" + backgroundImageUrl + ")" }}>
      <h1>teste componente</h1>
      <h2>{testeData}</h2>
      <button onClick={addHandler}>add</button>
      <hr />
      <h4>selectedProgramLevelsList</h4>
      <ul>
        {selectedProgramLevelsList &&
          selectedProgramLevelsList.map((item) => (
            <li key={item.id}>
              <span>{item.order}</span>
              <br />
              <span>{item.name}</span>
              <br />
              <span>{item.programId}</span>
              <br />
              <span>{item.description}</span>
            </li>
          ))}
      </ul>
      <hr />
      <h4>selectedUserProgramName</h4>
      <span>{selectedUserProgramName}</span>
      <hr />
      <h4>userActivitiesList</h4>
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
      <h4>selectedUserDetails</h4>
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
      <h4>usersList</h4>
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
