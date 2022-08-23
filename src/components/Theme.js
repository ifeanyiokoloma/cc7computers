import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(45, 133, 221)",
    },
    secondary: {
      main: "rgb(236, 24, 23)",
    },
    yellow: {
      main: "rgb(252, 234, 131)",
    },
    lighterGreen: {
      main: "rgb(240, 255, 240)",
    },
    Green: {
      main: "rgb(124, 180, 129)",
    },
    imprint: {
      main: "rgba(10, 10, 27, 0.616)",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        },
        outlined: {
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        },
      },
    },
  },
});
