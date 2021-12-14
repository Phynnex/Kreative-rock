import { createTheme } from "@material-ui/core";

let theme = createTheme({
  typography: {
    fontFamily: ["Lora", "Open Sans"].join(","),
  },
  palette: {
    primary: {
      main: "#00CCA7",
    },
    secondary: {
      main: "#FF7900",
    },
  },
});

export default theme;
