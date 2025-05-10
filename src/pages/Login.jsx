import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post('http://localhost:3000/api/user/login', formData)
    alert(result.data.message)
    localStorage.setItem("authToken", result.data.authToken)
  }

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
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email ID"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.password}
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
