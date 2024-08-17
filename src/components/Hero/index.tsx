import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ProductCard from "./card";
import { ArrowForwardIos } from "@mui/icons-material";

export default function Hero() {
  return (
    <Container sx={{ mt: "10em", color: "secondary.main" }}>
      <Box sx={{ width: "60%" }}>
        <Typography variant="h2" sx={{ fontWeight: "semi-bold" }}>
          Your backend more simplified, scalable, and manageable than ever.
        </Typography>
      </Box>
      <Box sx={{ mt: "2em" }}>
        <Stack direction="row" spacing={3}>
          <Button sx={{ backgroundColor: "primary.main", px: "2rem" }}>
            {" "}
            Get Started{" "}
          </Button>
          <Button sx={{ border: "1px solid #252525", px: "2rem" }}>
            {" "}
            Book a Demo{" "}
          </Button>
        </Stack>
      </Box>
      <Box
        sx={{
          borderRadius: "4px",
          border: "1px solid #252525",
          padding: "4em",
          mt: "6em",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              Build cloud infrastructure with ease, powered by open-source,
              Atomic architecture.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "gray" }}>
              Deploy scalable and reusable workflows for your complex backend
              processes using nodes with no configuration, running
              independently, all managed by the Atomic architecture.
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            backgroundColor: "#252525",
            my: "4rem",
          }}
        ></Box>

        <Box>
          <Typography> Our products </Typography>
          <Grid container spacing={4} justifyContent="flex-start" mt="0.5rem">
            <Grid item xs={12} sm={6} md={4} lg={4} display="flex">
              <ProductCard
                header="BaaS"
                description="Pre-built backend services for web and mobile apps, powered by ION and DAC."
                color="#c3caee"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} display="flex">
              <ProductCard
                header="ION"
                description="Manage Integration, APIs and complex backend processes, visually with built in nodes."
                color="#defde3"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} display="flex">
              <ProductCard
                header="Atomic Computing"
                description="Create and deploy scalable cloud infrastructure with ease with Atomic framework."
                color="#ffffff"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box mt={"8em"}>
        <Typography variant="h5">Solution for businesses</Typography>
        <Stack mt={"2em"} direction="row" spacing={2}>
          <Box display={"flex"} sx={{ width: { xs: "50%", xl: "40%" } }}>
            <Card sx={{ backgroundColor: "#c95738" }}>
              <CardActionArea sx={{ p: "2em" }}>
                <CardContent>
                  <Typography variant="h3" color="white" fontWeight={"bold"}>
                    {" "}
                    Enterprise program{" "}
                  </Typography>
                  <Typography mt={"5em"} variant="h6" color="white">
                    {" "}
                    Discover how Deskree provides secure and robust scalability
                    and integration for large scale businesses.{" "}
                  </Typography>
                  <Stack direction="row" alignItems="center">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mr: 1,
                        color: "white",
                      }}
                    >
                      <CheckCircleIcon />
                    </Box>
                    <Typography variant="body2" color="white">
                      SOC 2 Type 11, GDPR & HIPPA Compliant
                    </Typography>
                  </Stack>

                  <Typography mt={"1em"} variant="body2" color="white">
                    <ArrowForwardIos />
                  </Typography>
                </CardContent>
              </CardActionArea>{" "}
            </Card>
          </Box>
          <Box sx={{ display: { sm: "none", md: "block" } }}>
            <Card sx={{ minHeight: 300 }}>
              <CardMedia
                component="img"
                height="240"
                image="https://via.placeholder.com/300x200"
                alt="Placeholder Image"
                sx={{ width: "100%", flexShrink: 0 }}
              />
            </Card>
          </Box>
          <Box display={"flex"} sx={{ width: { xs: "50%", xl: "40%" } }}>
            <Card
              sx={{
                background: "linear-gradient(to right, #c7c7c7, #fefefe)",
              }}
            >
              <CardActionArea sx={{ p: "2em" }}>
                <CardContent>
                  <Typography variant="h3" color="black" fontWeight={"bold"}>
                    Accelerate program{" "}
                  </Typography>
                  <Typography mt={"5em"} variant="h6" color="black">
                    Learn how Deskree helps your team remain small, build
                    features fast, and get to market faster, all with no
                    overhead cloud cost.
                  </Typography>
                  <Typography mt={"1em"} variant="body2" color="black">
                    <ArrowForwardIos />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Stack>
      </Box>

      <Box
        sx={{
          backgroundColor: "#2a2a2a",
          p: "4rem",
          borderRadius: "16px",
          mt: "6rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">
          With Deskree, developers and business focus more on innovation and
          less on complex cloud setup.
        </Typography>
        <Box sx={{ mt: "2em" }}>
          <Stack direction="row" spacing={3}>
            <Button sx={{ backgroundColor: "primary.main", px: "2rem" }}>
              {" "}
              Get Started{" "}
            </Button>
            <Button sx={{ border: "1px solid #252525", px: "2rem" }}>
              {" "}
              Book a Demo{" "}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
