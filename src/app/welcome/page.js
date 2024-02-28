import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

function Welcome() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          background: "#fff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Image
            src="/images/online-shop.jpeg"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          ></Image>
          <Typography variant="h3" sx={{ textTransform: "capitalize" }}>
            Welcome to our shop
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Welcome;
