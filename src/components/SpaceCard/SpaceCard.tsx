import AssistantDirectionOutlinedIcon from "@mui/icons-material/AssistantDirectionOutlined";
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import BuyButton from "../Button/Button";
import { ColorPalette } from "@/constants/ColorPalette";

interface SpaceCardProps {
  address: string;
  image: string;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkDays: number;
  bulkDiscount: string;
  distance?: number;
}
const SpaceCard: React.FC<SpaceCardProps> = ({
  address,
  image,
  dayPassPrice,
  bulkPassPrice,
  bulkDays,
  bulkDiscount,
  distance,
}) => {
  return (
    <Card
      sx={{
        width: "370px",
        boxShadow: "0px 1.08px 8.63px 0px rgba(0, 0, 0, 0.06);",
        borderRadius: "8px",
      }}
    >
      <CardHeader
        sx={{ display: "flex", gap: "58px" }}
        title={
          <Typography
            variant="h4"
            sx={{
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              overflow: "hidden",
              WebkitLineClamp: "2",
              display: "-webkit-box",
            }}
          >
            {address}
          </Typography>
        }
        action={
          <IconButton
            aria-label="distance"
            sx={{
              border: "1px solid #EEE7E7",
              borderRadius: "6.47px",
              height: "52px",
              width: "52px",
            }}
          >
            <AssistantDirectionOutlinedIcon sx={{ color: "#1C1B1F" }} />
            <Typography sx={{ fontSize: "8px", fontWeight: 500 }}>
              {distance}
            </Typography>
          </IconButton>
        }
      />
      <Box p="2px 12px" mt="10px">
        <CardMedia
          sx={{ borderRadius: "6px" }}
          component="img"
          height="194"
          image={`${import.meta.env.BASE_URL}/assets/${image}`}
          alt="space-image"
        />
      </Box>
      <CardActions sx={{ p: 3, mt: "10px" }}>
        <BuyButton
          title="Day Pass"
          subtitle={`₹ ${dayPassPrice}/ Day`}
          sx={{
            backgroundColor: ColorPalette.button.mainLightGrey,
            borderColor: ColorPalette.button.strokeDarkYellow,
          }}
        />
        <BuyButton
          title="Bulk Pass"
          subtitle={`₹ ${bulkPassPrice}/ ${bulkDays} Days`}
          sx={{
            backgroundColor: ColorPalette.button.mainLightYellow,
            borderColor: ColorPalette.button.strokeDarkYellow,
          }}
          discount={bulkDiscount}
        />
      </CardActions>
    </Card>
  );
};

export default SpaceCard;
