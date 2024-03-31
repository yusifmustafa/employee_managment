import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { EmpManagmentContext } from "../../context/EmpManagmentProvider.jsx";

const LoginPage = () => {
  const context = useContext(EmpManagmentContext);
  const { handleAuthLogin, handleOnChangeAuthLogin, authUser } = context;
  const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Login{" "}
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="emp_email"
                autoComplete="email"
                onChange={(e) => {
                  handleOnChangeAuthLogin({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
                value={authUser.emp_email ? authUser.emp_email : ""}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="emp_password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={(e) => {
                  handleOnChangeAuthLogin({
                    name: e.target.name,
                    value: e.target.value,
                  });
                }}
                value={authUser.emp_password ? authUser.emp_password : ""}
              />
              <Button
                onClick={() => {
                  handleAuthLogin(authUser);
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default LoginPage;
