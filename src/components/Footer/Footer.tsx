import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          background: "#222E34",
          color: ["white", "#DDDDDD"],
          height: "44px",
          fontSize: "14px",
          alignItems: "center",
        }}
      >
        © Copyright 2024. Bhive Private Limited
      </Typography>
    </Box>
  );
};

export default Footer;
