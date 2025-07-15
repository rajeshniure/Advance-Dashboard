import { Box, Grid, Stack, Typography } from "@mui/material";
import loginImage from "../../assets/image/login.svg";
import CustomTextField from "../../components/formcomponents/CustomTextField";
import CustomButton from "../../components/buttons/CustomButton";
import { Link } from "react-router-dom";

import facebookImg from "../../assets/image/Facebook.svg";
import googleImg from "../../assets/image/Googlee.svg";
import FormWrapper from "../../singleform/FormWrapper";
import axiosConfig from "../../../axiosConfig";


interface FormData {
    username: string;
    password: string;
}

function Login() {
  const handleFormSubmit = async (data: FormData) => {
    try {
      const response = await axiosConfig.post("/auth/login", {
        username: data.username,
        password: data.password,
      });

      console.log("Login Success:", response.data);
      localStorage.setItem("authToken", response.data.token);
      alert("Login Success");
  } catch (error: any) {
    console.error("Login Failed:", error);
  }
};

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <Box
        sx={{
          p: 2,
          margin: "auto",
          backgroundColor: "white",
          width: "50%",
          borderRadius: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 6 }}>
            <Stack spacing={2}>
              <Stack>
                <Typography variant="h2">Login</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  How do i get started with login
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Stack>
                  <CustomTextField
                    label="Username"
                    type="username"
                    name="username"
                  />
                </Stack>
                <Stack>
                  <CustomTextField
                    label="Password"
                    type="password"
                    name="password"
                  />
                </Stack>
                <Typography
                  sx={{ alignSelf: "flex-end", color: "primary.main" }}
                >
                  Forgot Password
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={2} my={2}>
              <CustomButton
                label="Sign in"
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              />

              <CustomButton
                label="Sign in with Google"
                imageSrc={googleImg}
                sx={{ border: "1px solid #ddd", borderRadius: 4 }}
                fullWidth
              />
              <CustomButton
                label="Sign in with Facebook"
                imageSrc={facebookImg}
                sx={{ border: "1px solid #ddd", borderRadius: 4 }}
                fullWidth
              />
            </Stack>

            <Stack alignItems="center" marginTop={2}>
              <Typography color="text.secondary">
                Don’t have an account? <Link to="#">Sign up</Link>
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <img src={loginImage} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Box>
    </FormWrapper>
  );
}

export default Login;
