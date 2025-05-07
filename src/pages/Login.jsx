import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          width: "600px",
          padding: 2,
        }}
      >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Registration
        </Typography>
        <form>
          <TextField
            label="Email ID"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ marginTop: 1 }}
            size="large"
          >
            Login
          </Button>
          <Button fullWidth component={Link} variant="text" to='/register'>
            Need a new Account? Click here
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
