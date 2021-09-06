import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";

import { AuthApi } from "../api/authApi";
import { UsersApi } from "../api/usersApi";
import { mainActions } from "../store/mainSlice";
import { UserIdApi } from "../api/userIdApi";
import { UserActivitiesApi } from "../api/userActivitiesApi";

let usersLoaded = false;

const useStyles = makeStyles((theme) => ({
  smallAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  overFlow: {
    overflow: "auto",
    height: 383,
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      borderRadius: 3,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "grey",
      borderRadius: 3,
    },
  },
}));

const UserListComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.mainReducer.authToken);
  const usersList = useSelector((state) => state.mainReducer.usersList);

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
    dispatch(mainActions.cleanUserDetailData());
    dispatch(UserIdApi(token, userId));
    dispatch(UserActivitiesApi(token, userId));
  };

  return (
    <Fragment>
      {usersList.length === 0 && (
        <Box my={20} textAlign="center">
          <CircularProgress  color="secondary" />
        </Box>
      )}
      {usersList.length > 0 && (
        <Fragment>
          <Box my={1} mx={2}>
            <Grid container>
              <Grid item xs={2}>
                <Typography color="secondary" variant="h3">
                  Pos.
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography color="secondary" variant="h3">
                  Member
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography color="secondary" variant="h3">
                  Points
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <List className={classes.overFlow} component="nav">
            {usersList &&
              usersList.map((item, index) => (
                <ListItem
                  button
                  key={item.id}
                  value={item.id}
                  onClick={userDetailHandler}
                >
                  <Grid container>
                    <Grid item xs={2}>
                      <Box mt={0.6}>
                        <Typography color="primary" variant="h3">
                          {index + 1}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Avatar
                        className={classes.smallAvatar}
                        alt="User face"
                        src={item.image}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Box mt={0.6}>
                        <Typography color="primary" variant="h3">
                          {item.name}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box mt={0.6}>
                        <Typography color="primary" variant="h3">
                          {item.balance.points}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
          </List>
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserListComponent;
