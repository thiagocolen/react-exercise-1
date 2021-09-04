import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";
import { testeActions } from "../store/teste";
import { UserIdApi } from "../api/userIdApi";
import { UserActivitiesApi } from "../api/userActivitiesApi";

let usersLoaded = false;

// TODO: Overriding styles with global class names???

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  nameText: {
    // fontSize: "11px",
    color: "black",
    fontWeight: "bold",
  },
  points: {
    float: "right",
    // fontSize: "11px",
  },
  myContainer: {},
  titles: {
    marginTop: "10px",
    // fontSize: "11px",
    color: "grey",
    fontWeight: "bold",
  },
  overFlow: {
    margin: "10px",
    overflow: "auto",
    height: "370px",
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      borderRadius: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: "3px",
    },
  },
}));

const UserListComponent = () => {
  const classes = useStyles();
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

  const userDetailHandler = (event) => {
    const userId = event.currentTarget.attributes.value.value;
    dispatch(testeActions.cleanUserDetailData());
    dispatch(UserIdApi(token, userId));
    dispatch(UserActivitiesApi(token, userId));
  };

  return (
    <Fragment>
      <Grid container className={classes.titles}>
        <Grid item xs={2}>
          Pos
        </Grid>
        <Grid item xs={8}>
          Member
        </Grid>
        <Grid item xs={2}>
          Points
        </Grid>
      </Grid>

      <List
        className={classes.overFlow}
        component="nav"
        aria-label="main mailbox folders"
      >
        {usersList &&
          usersList.map((item, index) => (
            <ListItem
              button
              key={item.id}
              value={item.id}
              onClick={userDetailHandler}
            >
              <ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.nameText,
                  }}
                  primary={index + 1}
                />
                <Avatar
                  className={classes.smallAvatar}
                  alt="User face"
                  src={item.image}
                />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.nameText,
                }}
                primary={item.name}
              />
              <ListItemText
                classes={{
                  primary: classes.points,
                }}
                primary={item.balance.points}
              />
            </ListItem>
          ))}
      </List>
    </Fragment>
  );
};

export default UserListComponent;
