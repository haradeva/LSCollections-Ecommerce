import React, { useEffect, useState } from "react";
import { Grid, TextField, IconButton, Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, login } from "../state/stateAuth/Action";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch]);

  // Function to toggle the password visibility
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));
    console.log("userData ", userData);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"} // Toggle the type between 'text' and 'password'
                fullWidth
                autoComplete="password"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                      {/* Toggle the icon based on visibility */}
                    </IconButton>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className="bg-[#9155FD] w-full"
                type="submit"
                variant="contained"
                size="large"
                sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>

      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center items-center mt-6">
          <p className="mr-1 text-gray-700">Don't have an account?</p>
          <Button
            className="text-[#9155FD] font-bold"
            onClick={() => navigate("/signup")}
            sx={{
              textTransform: "none",
              padding: "0.6rem 0.5rem 0.5rem 0rem",
              color: "#9155FD",
              "&:hover": {
                color: "#9155FD",
              },
            }}
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
