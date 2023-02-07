import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgb(229, 9, 20)",
    },
    background: {
      default: "#000000",
    },
    action: {
      hoverOpacity: 0.25,
    },
  },
  typography: {
    fontSize: 13,
  },
});
