import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import EcoIcon from "@material-ui/icons/Eco";
import green from "@material-ui/core/colors/green";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: theme.palette.common.white,
  },
}));

const HeaderComponent = () => {
  const thiagoColenAvatarUrl =
    "https://media-exp1.licdn.com/dms/image/C4D03AQH8hRQxScoIcA/profile-displayphoto-shrink_200_200/0/1538777195418?e=1635984000&v=beta&t=UfvVtfqbnuwhcmNNAFRCWSdgESD5UHipv8Lng-LTUxk";

  const classes = useStyles();

  return (
    <AppBar position="fixed" classes={{ colorPrimary: classes.colorPrimary }}>
      <Toolbar>
        <Box mr={2}>
          <EcoIcon style={{ color: green[900] }} fontSize="large" />
        </Box>
        <Box flexGrow={8}>
          <Typography color="primary" variant="h5">
            Fielo React Test
          </Typography>
        </Box>

        <Box textAlign="right" flexGrow={2} mr={2}>
          <Link
            href="https://www.linkedin.com/in/thiagocolen/"
            target="_blank"
            color="secondary"
            variant="h6"
            underline="none"
          >
            Thiago Colen
          </Link>
        </Box>
        <Box flexGrow={0}>
          <Avatar alt="Thiago Colen" src={thiagoColenAvatarUrl} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
