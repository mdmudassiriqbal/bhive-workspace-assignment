import { ChevronRight } from "@mui/icons-material";
import { Box, Typography, type SxProps } from "@mui/material";
import Button from "@mui/material/Button";

const TripleArrowIcon = () => (
  <div className="flex items-center gap-0 ml-2">
    <ChevronRight sx={{ color: "#A5A9AC", margin: "-7px" }} />
    <ChevronRight sx={{ color: "#7A8285", margin: "-7px" }} />
    <ChevronRight sx={{ color: "#263238", margin: "-7px" }} />
  </div>
);
interface BuyButtonProps {
  title: string;
  subtitle: string;
  sx: SxProps;
  discount?: string;
}
export default function BuyButton({
  title,
  subtitle,
  sx,
  discount,
}: BuyButtonProps) {
  return (
    <Box>
      <Button
        variant="contained"
        endIcon={<TripleArrowIcon />}
        sx={{ borderRadius: "6px", ...sx }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textTransform: "none",
          }}
        >
          {discount && (
            <Typography
              sx={{
                display: "flex",
                margin: "0",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "8px",
                lineHeight: 1.5,
                position: "absolute",
                top: "-13px",
                left: "63px",
                background: "#263238",
                borderRadius: "3px",
                padding: "4px 8px",
                color: "white",
              }}
            >
              {discount}
            </Typography>
          )}
          <Typography color="#65624C">{title}</Typography>
          <Typography color="#263238">{subtitle}</Typography>
        </Box>
      </Button>
    </Box>
  );
}
