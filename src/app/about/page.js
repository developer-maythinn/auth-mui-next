"use client";
import { Box, Container, TextField } from "@mui/material";
import Image from "next/image";

const ResponsiveLayout = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          flex: 1,
          order: { xs: 2, md: 1 },
          textAlign: "center",
          mb: { xs: 2, md: 0 },
          height: { xs: "50vh", md: "auto" }, // Adjust the height as needed
          position: "relative",
          
        }}
      >
        <Image
          src="/images/university.avif"
          fill
          style={{
            objectFit: "cover",
            padding: "24px",
            // paddingRight: 0,
          }}
        />{" "}
      </Box>
      <Box
        sx={{
          flex: 1,
          order: { xs: 1, md: 2 },
          textAlign: "center",
          ml: { xs: 0, md: 2 },
        }}
      >
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField label="Last Name" variant="outlined" fullWidth />
      </Box>
    </Container>
  );
};

export default ResponsiveLayout;
