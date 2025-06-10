import SpaceCard from "@/components/SpaceCard/SpaceCard";
import { features } from "@/constants/features";
import { getSpaces } from "@/services/spaces/spaces";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setSpace } from "@/store/slices/spaceSlice";
import {
  Box,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
  type SxProps,
} from "@mui/material";
import { useEffect } from "react";
import { styles } from "./Home.styles";

const Home = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const columns = isSmall ? 2 : 4;
  const dispatch = useAppDispatch();
  const { spaces } = useAppSelector((state) => state.spaces);

  useEffect(() => {
    (async () => {
      try {
        const fetchSpaces = await getSpaces();
        dispatch(setSpace(fetchSpaces.data));
      } catch (e) {
        console.error("error:", e);
      }
    })();
  }, [dispatch]);
  return (
    <Box>
      {/* Hero section */}
      <Box display="flex" flexDirection="row" flexWrap="wrap-reverse">
        <Box sx={styles.heroSection(isSmall)}>
          {!isSmall && (
            <Box sx={{ ...(styles.heroSectionTypography as SxProps) }} />
          )}
          <Typography
            variant={isSmall ? "h4" : "h1"}
            textAlign={isSmall ? "center" : undefined}
          >
            Host your meeting with world-class amenities.
            {isSmall && (
              <Typography
                p={0}
                component="span"
                variant={isSmall ? "h4" : "h1"}
              >
                Starting at{" "}
                <Typography
                  component="span"
                  p={0}
                  variant={isSmall ? "h4" : "h1"}
                  color="#FFBB00"
                >
                  ₹199/-!
                </Typography>
              </Typography>
            )}
          </Typography>
          {!isSmall && (
            <Box display="flex" gap={1.5}>
              <Typography p={0} variant={isSmall ? "h4" : "h1"}>
                Starting at{" "}
                <Typography
                  component="span"
                  p={0}
                  variant={isSmall ? "h4" : "h1"}
                  color="#FFBB00"
                >
                  ₹199/-!
                </Typography>
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box
            mt="42px"
            pr={!isSmall ? "120px" : undefined}
            position="relative"
          >
            <Box sx={styles.heroRightPolygon(isSmall)} />
            <img
              src={`${import.meta.env.BASE_URL}/assets/CoworkingImg.svg`}
              alt="coworkingImg"
              style={{ mixBlendMode: "multiply" }}
            />
          </Box>
        </Box>
      </Box>
      {/* Main section */}
      <Box sx={styles.container(isSmall)}>
        {/* Why choose us section */}
        <Box
          sx={{
            display: "flex",
            gap: "40px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">Why Choose us?</Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexWrap="wrap"
              gap={isSmall ? "12px" : undefined}
              justifyContent="center"
            >
              {features.map((feature, i) => {
                const isLastCol = (i + 1) % columns === 0;
                const isLastRow = i >= features.length - columns;
                return (
                  <>
                    {!isSmall && (
                      <Box key={i} sx={styles.features(isLastCol, isLastRow)}>
                        <Box>{feature.icon}</Box>
                        <Box>
                          <Typography variant="h5">{feature.text}</Typography>
                          <Typography
                            variant="body1"
                            className="oneLiner"
                            sx={{ fontSize: "12px", fontWeight: 400 }}
                          >
                            {feature.text}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    {isSmall && (
                      <Card sx={styles.featureCard}>
                        <Box
                          display="flex"
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box>{feature.icon}</Box>
                          <Typography variant="body1">
                            {feature.text}
                          </Typography>
                        </Box>
                      </Card>
                    )}
                  </>
                );
              })}
            </Box>
          </Box>
        </Box>
        {/* Spaces section */}
        <Box>
          <Typography variant="h2">
            {isSmall ? "Our Spaces" : "Our space Overview"}
          </Typography>
          <Box mt={5} display="flex" gap="45px" flexWrap="wrap">
            {spaces.map((space) => (
              <SpaceCard
                address={space.address}
                key={space.id}
                image={space.images[0]}
                dayPassPrice={space.day_pass_price}
                bulkPassPrice={space.day_pass_price * 10}
                bulkDays={10}
                bulkDiscount={`${space.day_pass_discounts_percentage[10].value}% discount`}
              />
            ))}
          </Box>
        </Box>
        {/* Download app section */}
        {!isSmall && (
          <Box mb={5}>
            <Typography variant="h4" color="#605F5F" sx={{ pl: 12 }}>
              Download our app now
            </Typography>
            <Box sx={styles.footContainer}>
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}/assets/Group1000007102.png`}
                alt="App Preview"
                sx={styles.appPreview}
              />

              <Card sx={styles.appPreviewCard}>
                <Box display="flex" maxWidth="586px" flexDirection="column">
                  {!isSmall && (
                    <Typography variant="h6">
                      Boost your productivity with the BHIVE Workspace app.{" "}
                      <br />
                      Elevate your workspace, collaborate efficiently, and
                      unlock exclusive perks.
                    </Typography>
                  )}
                  <Box display="flex" gap="24px" mt="49px">
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }/assets/googlePlayDownload.png`}
                      alt="android"
                      width={146}
                      height={45}
                    />
                    <img
                      src={`${
                        import.meta.env.BASE_URL
                      }/assets/appStoreDownload.png`}
                      alt="apple"
                      width={145}
                      height={45}
                    />
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        )}
        {isSmall && (
          <Box>
            <Typography variant="h3">Download the app now</Typography>
            <Card
              sx={{
                mb: 8,
                boxShadow: "0px 1.08px 8.63px 0px rgba(0, 0, 0, 0.06);",
                width: "100%",
                borderRadius: "12px",
              }}
            >
              <Box
                component="img"
                src={`${import.meta.env.BASE_URL}/assets/Group1000007102.png`}
                alt="App Preview"
                sx={{
                  width: "285px",
                  height: "300px",
                  margin: "auto",
                  display: "flex",
                  mt: "48.6px",
                }}
              />
              <Box
                display="flex"
                gap="24px"
                mt="12px"
                mb="12px"
                justifyContent="center"
              >
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }/assets/googlePlayDownload.png`}
                  alt="android"
                  width={146}
                  height={45}
                />
                <img
                  src={`${
                    import.meta.env.BASE_URL
                  }/assets/appStoreDownload.png`}
                  alt="apple"
                  width={145}
                  height={45}
                />
              </Box>
            </Card>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
