import { Button } from "@mui/material"

function logout() {
 const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/auth/login";
  };

  return (
    <Button onClick = {handleLogout} variant="contained" color="error">
        Logout
    </Button>
  )
}

export default logout