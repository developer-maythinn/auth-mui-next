import ResponsiveAppBar from "@/components/ResponsiveAppBar";
import { CenterFocusStrongOutlined } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Welcome() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: "#fff",

          background:
            // linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
            " url(/images/university.avif) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ResponsiveAppBar />
      </Box>
      {/* <Box
        sx={{
          height: "100vh",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
          background:
            //    "url(/images/online-shop-bg.png) no-repeat",
            "linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(/images/online-shop-bg.png) no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      >

        <Box sx={{ textAlign: "center" }}>
          <Card sx={{ p: 3, background: "transparent" }}>
            <Typography
              variant="h3"
              sx={{ textTransform: "capitalize", color: "orange" }}
            >
              Welcome to our shop
            </Typography>
          </Card>
        </Box>
      </Box> */}
    </>
  );
}

export default Welcome;
