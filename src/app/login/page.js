"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  // State to store the form data
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phone: undefined,
  });
  const router = useRouter();
  const [message, setMessage] = React.useState("");
  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://api.wailinuat.cloudns.biz/api/login",
        formData
      );
      if (response.data.success) {
        setMessage("Successfully");
        router.push("/welcome");
      }

      console.log("Post created:", response.data);
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <>
      {message && <Alert>{message}</Alert>}
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          height: { lg: "100vh" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          p: 3,
        }}
      >
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Image src="/images/logo.png" width={120} height={120} />
          <Typography component="h1" variant="h5">
            Congratulations on well-deserved scholarship win! 🎉🎈🙌
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Card
              sx={{
                position: "relative",
                height: { lg: "70vh" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))",
                backdropFilter: "blur(0.9rem)",
              }}
            >
              <Grid container sx={{ height: "100%" }}>
                <Grid
                  item
                  md={6}
                  xs={12}
                  sx={{
                    position: "relative",
                    display: { xs: "none", sm: "flex" },
                    height: { xs: "40vh", lg: "100%" },
                    width: "100%",
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
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      p: 3,
                      pl: { md: 0 },
                    }}
                  >
                    <Image src="/images/logo.png" width={80} height={80} />

                    <Typography component="h1" variant="h5" sx={{ mb: 5 }}>
                      Sign in
                    </Typography>

                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            sx={{ mb: 1 }}
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 1 }}
                      >
                        Sign In
                      </Button>
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link href="/" variant="body2">
                            Don't have any account? Sign up
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
