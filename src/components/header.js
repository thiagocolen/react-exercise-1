import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    height: '83px',
  },
  avatar: {
    alignSelf: "center",
    margin: "10px 50px",
  },
  title: {
    color: "black",
  },
  name: {
    color: "gray",
    textAlign: "right",
    textTransform: "uppercase",
  },
});

const HeaderComponent = () => {
  const classes = useStyles();

  const thiagoColenAvatarUrl =
    "https://media-exp1.licdn.com/dms/image/C4D03AQH8hRQxScoIcA/profile-displayphoto-shrink_200_200/0/1538777195418?e=1635984000&v=beta&t=UfvVtfqbnuwhcmNNAFRCWSdgESD5UHipv8Lng-LTUxk";

  return (
    <AppBar className={classes.root} position="fixed">
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <h3 className={classes.title}>Fielo React Test</h3>
          </Grid>
          <Grid item xs={2}>
            <h5 className={classes.name}>Thiago Colen</h5>
          </Grid>

          <Grid item xs={2}>
            <Avatar
              className={classes.avatar}
              alt="Thiago Colen"
              src={thiagoColenAvatarUrl}
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
