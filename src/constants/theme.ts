import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 4,
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "58px",
      fontWeight: 700,
      lineHeight: "61.6px",
      letterSpacing: "0",
    },
    h2: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "52.8px",
      letterSpacing: "0",
    },
    h3: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "52.8px",
      letterSpacing: "0",
    },
    h4: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "35.2px",
      letterSpacing: "0",
    },
    h5: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "26.4px",
      letterSpacing: "0",
    },
    body1: {
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "100%",
      letterSpacing: "0%",
      verticalAlign: "middle",
    },
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
});
export default theme;
