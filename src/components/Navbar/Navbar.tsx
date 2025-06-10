import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import Logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "#FFFFFF",
        height: {
          xs: "72px",
          md: "90px",
        },
      }}
    >
      <Toolbar sx={{ height: "100%", ml: 12, mr: 12 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="Logo" style={{ height: 30 }} />
        </Typography>
        <IconButton
          sx={{
            color: "#FFBB00",
            border: "1px solid #F2B304",
            borderRadius: "4px",
            boxShadow: "4px 4px 14px 0px #0000000F",
          }}
        >
          <PhoneIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
