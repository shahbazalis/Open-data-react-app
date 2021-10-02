import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useHistory } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LooseObject , UserInfo } from "../Utility/interface";
import { signup } from "../Models/apis";

const theme = createTheme();

const emptyObject: LooseObject = {};

export default function SignUp() {
  let history = useHistory();
  const [formState, setFormState] = useState({
    values: emptyObject,
  });

  useEffect(() => {
    // * set the variable value
    setFormState((formState) => ({
      ...formState,
    }));
  }, [formState.values]);

  // text input change event call
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // *event.persist(), which will remove the synthetic event from the pool and allow references to the event to be retained by user code.
    event.persist();
    // * set the variable value in values and touched status
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userInfo: UserInfo = {
      email: formState.values.email.toLowerCase(),
      password: formState.values.password,
    };
    const signupResult = await signup(userInfo);
    if (signupResult) {
      let path = `/`;
      history.push(path);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="txt-email"
              margin="normal"
              required
              fullWidth
              name="email"
              onChange={handleChange}
              type="text"
              value={formState.values.email || ""}
              variant="outlined"
              label="Email Address"
            />
            <TextField
              id="txt-password"
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={handleChange}
              type="password"
              value={formState.values.password || ""}
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item xs>
                <Link to="/">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
