import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
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
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Date of birth"
            type="date"
            name="username"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="username"
            fullWidth
            margin="normal"
            required
          />
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
            Register
          </Button>
          <Button fullWidth component={Link} to='/login'>
            Already have an Account? Login here
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
