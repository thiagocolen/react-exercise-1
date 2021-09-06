import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import FlareIcon from "@material-ui/icons/Flare";
import blue from "@material-ui/core/colors/blue";
import CircularProgress from "@material-ui/core/CircularProgress";

import { mainActions } from "../store/mainSlice";
import { ProgramName } from "../api/programNameApi";
import { ProgramLevels } from "../api/programsLevelsApi";

const useStyles = makeStyles((theme) => ({
  box: {
    height: 420,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "auto",
  },
  sliderRoot: {
    width: "100%",
    marginTop: 40,
  },
  sliderMarkLabel: {
    top: -24,
    fontWeight: "bold",
    fontSize: 14,
  },
  sliderThumb: {
    color: blue[900],
  },
}));

const UserDetailsComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.mainReducer.authToken);

  const selectedUserDetails = useSelector(
    (state) => state.mainReducer.selectedUserDetails
  );

  const selectedUserProgramName = useSelector(
    (state) => state.mainReducer.selectedUserProgramName
  );

  const selectedProgramLevelsList = useSelector(
    (state) => state.mainReducer.selectedProgramLevelsList
  );

  const programLevelMarks = useSelector(
    (state) => state.mainReducer.programLevelMarks
  );

  const selectedProgramLevel = useSelector(
    (state) => state.mainReducer.selectedProgramLevel
  );

  useEffect(() => {
    if (selectedUserDetails) {
      dispatch(ProgramName(token, selectedUserDetails.programId));
      dispatch(ProgramLevels(token, selectedUserDetails.programId));
    }
  }, [token, selectedUserDetails, dispatch]);

  useEffect(() => {
    if (selectedProgramLevelsList.length > 0) {
      let marks = selectedProgramLevelsList.map((item) => {
        return { value: item.order, label: item.name };
      });
      dispatch(mainActions.setProgramLevelMarks(marks));
    }
  }, [selectedProgramLevelsList, dispatch]);

  useEffect(() => {
    if (programLevelMarks.length > 0) {
      let selectedMark = selectedProgramLevelsList.find((item) => {
        return item.id === selectedUserDetails.levelId;
      });
      dispatch(mainActions.setSelectedProgramLevel(selectedMark));
    }
  }, [
    programLevelMarks,
    selectedProgramLevelsList,
    selectedUserDetails,
    dispatch,
  ]);

  return (
    <Fragment>
      {!selectedUserDetails && (
        <Box my={20} textAlign="center">
          <CircularProgress color="secondary" />
        </Box>
      )}
      {selectedUserDetails && (
        <Box p={0.5} className={classes.box}>
          <Grid container>
            <Grid item xs={12}>
              <Box mt={2}>
                <Avatar
                  className={classes.avatar}
                  alt="User face"
                  src={selectedUserDetails.image}
                />
              </Box>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Box mt={3} mb={1} mx={3}>
                  <Typography color="primary" variant="h1">
                    {selectedUserDetails.name}
                  </Typography>
                </Box>
                <Box mb={3} mx={3}>
                  <Typography color="secondary" variant="h4">
                    {selectedUserProgramName}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Box mx={1} my={3} textAlign="center">
            <Grid container>
              <Grid item xs={4} className={classes.textCenter}>
                <Box mb={1}>
                  <Typography color="primary" variant="h2">
                    <AllInclusiveIcon
                      style={{
                        color: blue[800],
                        fontSize: 17,
                        marginRight: 3,
                        marginBottom: -3,
                      }}
                    />
                    {selectedUserDetails.balance.points}
                  </Typography>
                </Box>
                <Typography color="secondary" variant="h4" mt={2}>
                  Points
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.textCenter}>
                <Box mb={1}>
                  <Typography color="primary" variant="h2">
                    {selectedUserDetails.balance.miles}
                  </Typography>
                </Box>
                <Typography color="secondary" variant="h4">
                  Miles
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.textCenter}>
                <Box mb={1}>
                  <Typography color="primary" variant="h2">
                    {selectedUserDetails.balance.formatedCurrency}
                  </Typography>
                </Box>
                <Typography color="secondary" variant="h4">
                  Currency
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider />
          <Grid container>
            <Grid item xs={12}>
              {selectedProgramLevel && (
                <Box mx={4}>
                  <Slider
                    classes={{
                      root: classes.sliderRoot,
                      markLabel: classes.sliderMarkLabel,
                      thumb: classes.sliderThumb,
                    }}
                    aria-labelledby="discrete-slider-custom"
                    disabled={true}
                    marks={programLevelMarks}
                    step={1}
                    min={1}
                    max={programLevelMarks.length}
                    defaultValue={selectedProgramLevel.order}
                  />
                </Box>
              )}
            </Grid>
          </Grid>
          <Divider />
          <Box textAlign="center" my={3}>
            <FlareIcon color="secondary" />
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default UserDetailsComponent;
