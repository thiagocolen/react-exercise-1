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
import FlagIcon from "@material-ui/icons/Flag";
import LockIcon from "@material-ui/icons/Lock";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  blueColor: {
    fill: theme.palette.info.dark,
  },
  greenColor: {
    fill: theme.palette.success.dark,
  },
  yellowColor: {
    fill: theme.palette.warning.dark,
  },
}));

const UserActivitiesListComponent = () => {
  const userActivitiesList = useSelector(
    (state) => state.mainReducer.userActivitiesList
  );

  const classes = useStyles();

  return (
    <Fragment>
      {userActivitiesList.length === 0 && (
        <Box my={20} textAlign="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {userActivitiesList.length > 0 && (
        <Fragment>
          <Box m={1}>
            <Typography variant="h2">Activitie's Feed</Typography>
          </Box>
          <Box className={classes.root}>
            <List component="nav">
              {userActivitiesList.length > 0 &&
                userActivitiesList.map((item) => (
                  <Fragment key={item.id}>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={2}>
                          {item.icon === "Received" && (
                            <RadioButtonCheckedIcon
                              fontSize="small"
                              classes={{
                                root: classes.blueColor,
                              }}
                            />
                          )}
                          {item.icon === "Completed" && (
                            <FlagIcon
                              fontSize="small"
                              classes={{
                                root: classes.greenColor,
                              }}
                            />
                          )}
                          {item.icon === "Redeemed" && (
                            <LockIcon
                              fontSize="small"
                              classes={{
                                root: classes.yellowColor,
                              }}
                            />
                          )}
                        </Grid>
                        <Grid item xs={10}>
                          <Box>
                            <Typography variant="h4" color="secondary">
                              {item.fomatedDate}
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
      )}
    </Fragment>
  );
};

export default UserActivitiesListComponent;
