import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Controller, useForm } from "react-hook-form";
import { RegisterService } from "../../../services/RegisterService";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://byteworks.cl">
        BiteWorks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Business = () => {
 
  const { register, handleSubmit, reset, control } = useForm();
  const onSubmit = (data) => {
    RegisterService(data)
    reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#257FEA" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
     
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
        >
          
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  {...register("firstName")}
                  label="Name"
                  required
                  fullWidth
                  id="firstName"
                  autoFocus
                />
              </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                {...register("email")}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                {...register("password")}
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Controller
                    name="role"
                    id="role"
                    defaultValue={""}
                    control={control}
                    render={({ field }) => (
                      <Select labelId="role-label" {...field}>
                        <MenuItem value="Back-End">Back-End Developer</MenuItem>
                        <MenuItem value="Front-End">
                          Front-End Developer
                        </MenuItem>
                        <MenuItem value="Full-Stack">
                          Full-Stack Engineer
                        </MenuItem>
                        <MenuItem value="Machine Learning Engineer">
                          Machine Learning Engineer
                        </MenuItem>
                        <MenuItem value="Mobile Applications">
                          Mobile Applications Developer
                        </MenuItem>
                        <MenuItem value="QA Engineer">
                          QA Engineer (Selenium)
                        </MenuItem>
                        <MenuItem value="Cloud Engineer">
                          Cloud Engineer
                        </MenuItem>
                        <MenuItem value="Data Analyst">Data Analyst</MenuItem>
                      </Select>
                    )}
                  />
                </FormControl>
              </Grid>
            <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Type of services"
                  {...register("Type of services")}
                  label="Type of services"
                  required
                  fullWidth
                  id="Type of services"
                  autoFocus
                />
              </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox value="allowExtraEmails" color="primary" />
                }
                label="I want to receive information & promotions via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#257FEA" }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="./login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Business





