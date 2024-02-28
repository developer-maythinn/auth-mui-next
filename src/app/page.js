"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";

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
  const [message, setMessage] = React.useState("");
  const router = useRouter();
  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://54.179.146.88:3000/api/insertData",
        formData
      );
      if (response.data) {
        setMessage(response.data.message);
        router.push("/login");
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
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 500 }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              mx: 2,
            }}
          >
            <Avatar></Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 3 }}>
              Sign up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    // autoComplete="fname"
                    name="firstname"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}

                    // autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    type="email"
                    onChange={handleChange}
                    // autoComplete="email"
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
                    // autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="Address"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    // autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="phone"
                    label="phone"
                    type="number"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    // autoComplete="current-password"
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
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
