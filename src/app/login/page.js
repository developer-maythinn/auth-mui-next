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
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";

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
  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to submit the form data using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://54.179.146.88:3000/api/login",
        formData
      );
      if (response.data.success) {
        setMessage("Successfully");
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
            }}
          >
            <Avatar></Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 3 }}>
              Sign in{" "}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
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
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
