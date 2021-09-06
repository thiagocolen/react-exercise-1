import { Fragment } from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    height: 393,
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

const UserActivitiesListComponent = () => {
  const userActivitiesList = useSelector(
    (state) => state.teste.userActivitiesList
  );

  const classes = useStyles();

  return (
    <Fragment>
      <Box m={1}>
        <Typography variant="h2">Activitie's Feed</Typography>
      </Box>
      <Box className={classes.root}>
        <List component="nav">
          {userActivitiesList.length > 0 &&
            userActivitiesList.map((item) => (
              <Fragment>
                <ListItem key={item.id}>
                  <Grid container>
                    <Grid item xs={2}>
                      <RadioButtonCheckedIcon fontSize="small" />
                    </Grid>
                    <Grid item xs={10}>
                      <Box>
                        <Typography variant="h4" color="secondary">
                          {item.date}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body1">
                          {item.description}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
        </List>
      </Box>
    </Fragment>
  );
};

export default UserActivitiesListComponent;
