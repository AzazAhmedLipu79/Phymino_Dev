import { Container, Grid } from "@mui/material";

import { Link as CardLink } from "react-router-dom";
import BottomNav from "../../Shared/BottomNav/Bottomnav";
import Link from "@mui/material/Link";
import Header from "../../Shared/Header/Header";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const Classes = () => {
  const theme = useTheme();

  return (
    <>
      <Header></Header>
      <Container sx={{ py: "30px", margin: "0 auto" }}>
        <Grid sx={{ py: "5px" }} container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Link underline="none" component={CardLink} to="/PHY1">
              <Card
                width="container-fluid"
                sx={{
                  px: "15px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    py: "15px",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      পিজিক্স ১ম পত্র
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Professor Bean
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? (
                        <SkipNextIcon />
                      ) : (
                        <SkipPreviousIcon />
                      )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? (
                        <SkipPreviousIcon />
                      ) : (
                        <SkipNextIcon />
                      )}
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{
                    width: "56%",
                    height: 150,
                    // py: "10px",
                    borderRadius: "10px",
                  }}
                  image="https://cutt.ly/aTTQwIt"
                  alt="Live from space album cover"
                />
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>

      {/* ##################################################################################
      ###################################################################################### */}
      <Container sx={{ py: "30px", margin: "0 auto" }}>
        <Grid sx={{ py: "5px" }} container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Link underline="none" component={CardLink} to="/">
              <Card
                width="container-fluid"
                sx={{
                  px: "15px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    py: "15px",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Question Bank Solving
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Professor Issac
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="previous">
                      {theme.direction === "rtl" ? (
                        <SkipNextIcon />
                      ) : (
                        <SkipPreviousIcon />
                      )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                      {theme.direction === "rtl" ? (
                        <SkipPreviousIcon />
                      ) : (
                        <SkipNextIcon />
                      )}
                    </IconButton>
                  </Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{
                    width: "56%",
                    height: 150,
                    // py: "10px",
                    borderRadius: "10px",
                  }}
                  image="https://cutt.ly/VYKie6n"
                  alt="Live from space album cover"
                />
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <BottomNav></BottomNav>
    </>
  );
};

export default Classes;
