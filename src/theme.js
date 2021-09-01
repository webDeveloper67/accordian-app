import { createTheme } from "@material-ui/core/styles";
import { deepOrange, orange } from "@material-ui/core/colors";

const theme = createTheme({
  // typography: {
  //   button: {
  //     fontSize: "3rem",
  //   },
  // },
  overrides: {
    MuiGrid: {
      container: {
        height: "100vh",
        "& .MuiGrid-grid-sm-4": {
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      },
      // item: {},
    },
  },

  palette: {
    primary: {
      light: "#ff784e",
      main: "#ff5722",
      dark: "#b23c17",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffa733",
      main: "#ff9100",
      dark: "#b26500",
      contrastText: "#000",
    },
    openTitle: deepOrange["400"],
    protectedTitle: orange["400"],
    type: "light",
  },
});

export default theme;
