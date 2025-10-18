import { Box, Grid, Stack, Typography, Card } from "@mui/material";
import CustomTextField from "../components/formcomponents/CustomTextField";
import CustomButton from "../components/buttons/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "/assets/image/login.svg";
import facebookImg from "/assets/image/Facebook.svg";
import googleImg from "/assets/image/Googlee.svg";
import FormWrapper from "../singleform/FormWrapper";
import axiosConfig from "../../axiosConfig";

interface FormData {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const handleFormSubmit = async (data: FormData) => {
    try {
      const response = await axiosConfig.post("/auth/login", {
        username: data.username,
        password: data.password,
      });

      console.log("Login Success:", response.data);
      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (error: any) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <FormWrapper onSubmit={handleFormSubmit}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: { xs: 2, sm: 4, md: 0 },
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: 1200, width: "100%" }}
        >
          <Grid size={{xs:12, md:6}}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 3,
                p: { xs: 4, sm: 4, md: 6 },
                width: "100%",
                maxWidth: { xs: "100%", sm: 450, md: "100%" },
                mx: "auto",
              }}
            >
              <Box textAlign="left">
                <Stack spacing={2}>
                  <Stack>
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      gutterBottom
                      sx={{
                        fontSize: { xs: "1.8rem", sm: "2rem", md: "2.2rem" },
                      }}
                    >
                      Login
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: { xs: "0.9rem" } }}
                    >
                      Welcome back! Please login to your account
                    </Typography>
                  </Stack>

                  <Stack spacing={1.5} mt={2}>
                    <CustomTextField
                      label="Username"
                      type="text"
                      name="username"
                    />
                    <CustomTextField
                      label="Password"
                      type="password"
                      name="password"
                    />
                    <Typography
                      sx={{
                        alignSelf: { xs: "center", md: "flex-end" },
                        color: "primary.main",
                        cursor: "pointer",
                        fontSize: { xs: "0.9rem" },
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Stack>
                </Stack>

                <Stack spacing={2} my={3}>
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
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      textTransform: "none",
                    }}
                    fullWidth
                  />
                  <CustomButton
                    label="Sign in with Facebook"
                    imageSrc={facebookImg}
                    sx={{
                      border: "1px solid #ddd",
                      borderRadius: 4,
                      textTransform: "none",
                    }}
                    fullWidth
                  />
                </Stack>

                <Stack alignItems="center" marginTop={3}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.9rem" } }}
                  >
                    Don’t have an account?{" "}
                    <Link to="#" style={{ color: "#1976d2" }}>
                      Sign up
                    </Link>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={2}
                    sx={{ fontSize: { xs: "0.85rem" } }}
                  >
                    For Demo use this: <br />
                    Username: <strong>johnd</strong> <br />
                    Password: <strong>m38rmF$</strong>
                  </Typography>
                </Stack>
              </Box>
            </Card>
          </Grid>

          <Grid
            size ={{xs:12, md:6}}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={loginImage}
              alt="Login illustration"
              sx={{
                width: "100%",
                maxWidth: 480,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </FormWrapper>
  );
}

export default Login;
