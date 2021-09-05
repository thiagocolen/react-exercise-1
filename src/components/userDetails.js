import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Slider from "@material-ui/core/Slider";

import { testeActions } from "../store/teste";
import { ProgramName } from "../api/programNameApi";
import { ProgramLevels } from "../api/programsLevelsApi";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: "auto",
  },
  textCenter: {
    textAlign: "center",
  },
  sliderRoot: {
    width: "80%",
    marginTop: "40px",
  },
  sliderMarkLabel: {
    top: "-24px",
    fontWeight: "bold",
    color: "grey",
  },
}));

const UserDetailsComponent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.teste.authToken);

  const selectedUserDetails = useSelector(
    (state) => state.teste.selectedUserDetails
  );

  const selectedUserProgramName = useSelector(
    (state) => state.teste.selectedUserProgramName
  );

  const selectedProgramLevelsList = useSelector(
    (state) => state.teste.selectedProgramLevelsList
  );

  const programLevelMarks = useSelector(
    (state) => state.teste.programLevelMarks
  );

  const selectedProgramLevel = useSelector(
    (state) => state.teste.selectedProgramLevel
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
      dispatch(testeActions.setProgramLevelMarks(marks));
    }
  }, [selectedProgramLevelsList, dispatch]);

  useEffect(() => {
    if (programLevelMarks.length > 0) {
      let selectedMark = selectedProgramLevelsList.find((item) => {
        return item.id === selectedUserDetails.levelId;
      });
      dispatch(testeActions.setSelectedProgramLevel(selectedMark));
    }
  }, [
    programLevelMarks,
    selectedProgramLevelsList,
    selectedUserDetails,
    dispatch,
  ]);

  return (
    <Fragment>
      {selectedUserDetails && (
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Avatar
                className={classes.avatar}
                alt="User face"
                src={selectedUserDetails.image}
              />
            </Grid>
            <Grid item xs={12}>
              <h3>{selectedUserDetails.name}</h3>
              <h6>{selectedUserProgramName}</h6>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={0}>
            <Grid item xs={4} className={classes.textCenter}>
              <h5>{selectedUserDetails.balance.points}</h5>
              <h6>Points</h6>
            </Grid>
            <Grid item xs={4} className={classes.textCenter}>
              <h5>{selectedUserDetails.balance.miles}</h5>
              <h6>Miles</h6>
            </Grid>
            <Grid item xs={4} className={classes.textCenter}>
              <h5>{selectedUserDetails.balance.currency}</h5>
              <h6>Currency</h6>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.textCenter}>
              {selectedProgramLevel && (
                <Slider
                  classes={{
                    root: classes.sliderRoot,
                    markLabel: classes.sliderMarkLabel,
                  }}
                  aria-labelledby="discrete-slider-custom"
                  disabled={true}
                  marks={programLevelMarks}
                  step={1}
                  min={1}
                  max={programLevelMarks.length}
                  defaultValue={selectedProgramLevel.order}
                />
              )}
            </Grid>
          </Grid>
        </div>
        // <div className="user-details">
        //   <span>{selectedUserDetails.id}</span>
        //   <br />
        //   <span>{selectedUserDetails.name}</span>
        //   <br />
        //   {selectedUserProgramName && (
        //     <Fragment>
        //       <span>{selectedUserProgramName}</span>
        //       <br />
        //     </Fragment>
        //   )}
        //   <span>{selectedUserDetails.image}</span>
        //   <br />
        //   <span>{selectedUserDetails.programId}</span>
        //   <br />
        //   <span>{selectedUserDetails.levelId}</span>
        //   <br />
        //   <span>{selectedUserDetails.balance.points}</span>
        //   <br />
        //   <span>{selectedUserDetails.balance.miles}</span>
        //   <br />
        //   <span>{selectedUserDetails.balance.currency}</span>
        //   <br />
        // </div>
      )}
    </Fragment>
  );
};

export default UserDetailsComponent;
