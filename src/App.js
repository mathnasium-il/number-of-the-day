import {
  Box,
  CssBaseline,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Number from "./components/Number";
import TopHalf from "./components/TopHalf";
import BottomHalf from "./components/BottomHalf";
import Footer from "./components/Footer";
import Time from "./components/Time";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ef3e33",
    },
    secondary: {
      main: "#ebe70e",
    },
    tertiary: {
      main: "#b5121b",
    },
    quaternary: {
      main: "#fff",
    },
    lightGray: {
      main: "#c8c8c8",
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "'avenir_nextregular', 'Arial', 'sans-serif'",
    h1: {
      fontFamily: "'avenir_nextbold', 'Arial', 'sans-serif'",
    },
    h2: {
      fontFamily: "'avenir_nextbold', 'Arial', 'sans-serif'",
    },
    h3: {
      fontFamily: "'avenir_nextbold', 'Arial', 'sans-serif'",
    },
    h4: {
      fontFamily: "'avenir_nextdemi_bold', 'Arial', 'sans-serif'",
    },
    h5: {
      fontFamily: "'avenir_nextdemi_bold', 'Arial', 'sans-serif'",
    },
    h6: {
      fontFamily: "'avenir_nextmedium', 'Arial', 'sans-serif'",
    },
    subtitle1: {
      fontFamily: "'avenir_nextdemi_bold', 'Arial', 'sans-serif'",
    },
    caption: {
      fontFamily: "'avenir_nextregular', 'Arial', 'sans-serif'",
    },
    h5Regular: {
      fontFamily: "'avenir_nextregular', 'Arial', 'sans-serif'",
    },
  },
});

const useStyles = makeStyles()((theme) => {
  return {
    pageContainer: {
      display: "flex",
      flexFlow: "column",
      width: "100%",
      minHeight: "100vh",
    },
    pageContent: {
      padding: theme.spacing(5),
      flex: "1 1 auto",
      height: "auto",
    },
    root: {
      display: "flex",
    },
  };
});

function App() {
  const { classes } = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={`App ${classes.root}`}>
        <Box className={classes.pageContainer}>
          <Box className={classes.pageContent}>
            <Time />
            <Number />
            <TopHalf />
            <Divider sx={{ borderStyle: "dashed", my: 2 }} />
            <BottomHalf />
          </Box>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
