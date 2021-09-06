import { useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import BgImageComponent from "./components/bgImage";
import HeaderComponent from "./components/header";
import UserListComponent from "./components/userList";
import UserDetailsComponent from "./components/userDetails";
import UserActivitiesListComponent from "./components/userActivitiesList";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[500],
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: 20,
      fontWeight: "bolder",
    },
    h2: {
      fontSize: 16,
      fontWeight: "bold",
    },
    h3: {
      fontSize: 12,
      fontWeight: "bold",
    },
    h4: {
      fontSize: 12,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
      fontWeight: "bolder",
    },
    h6: {
      fontSize: 9,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 12,
      fontWeight: "normal",
    },
    body2: {
      fontSize: 10,
      fontWeight: "bold",
    },
  },
});

function App() {

  const selectedUserDetails = useSelector(
    (state) => state.teste.selectedUserDetails
  );

  const userActivitiesList = useSelector(
    (state) => state.teste.userActivitiesList
  );

  return (
    <ThemeProvider theme={theme}>
      <BgImageComponent />

      <HeaderComponent />
      <Box mt={15} mb={20}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper>
                <Box p={1}>
                  <UserListComponent />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              {selectedUserDetails && (
                <Paper>
                  <Box p={1}>
                    <UserDetailsComponent />
                  </Box>
                </Paper>
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {userActivitiesList.length > 0 && (
                <Paper>
                  <Box p={1}>
                    <UserActivitiesListComponent />
                  </Box>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
