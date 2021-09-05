import { Fragment } from "react";
import { useSelector } from "react-redux";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import BgImageComponent from "./components/bgImage";
import HeaderComponent from "./components/header";
import UserListComponent from "./components/userList";
import UserDetailsComponent from "./components/userDetails";
// import TesteComponent from "./components/teste";

import "./App.css";

const useStyles = makeStyles({
  gridContainer: {
    marginTop: "100px",
  },
});

function App() {
  const classes = useStyles();

  const selectedUserDetails = useSelector(
    (state) => state.teste.selectedUserDetails
  );

  const userActivitiesList = useSelector(
    (state) => state.teste.userActivitiesList
  );

  return (
    <Fragment>
      <BgImageComponent />

      <HeaderComponent />

      <Container maxWidth="md">
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={4}>
            <Paper>
              <UserListComponent />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            {selectedUserDetails && (
              <Paper>
                <UserDetailsComponent />
              </Paper>
            )}
          </Grid>
          <Grid item xs={4}>
            {userActivitiesList.length > 0 && (
              <Paper>
                userActivitiesList
              </Paper>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* <TesteComponent /> */}
    </Fragment>
  );
}

export default App;
