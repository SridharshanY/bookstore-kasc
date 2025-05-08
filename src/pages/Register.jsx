import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({})

  const handelChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.name]: event.target.value
      }
    )
    console.log(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
          Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            margin="normal"
            onChange={handelChange}
            value={formData.username}
            required
          />
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            onChange={handelChange}
            value={formData.name}
            required
          />
          <TextField
            label="Date of birth"
            type="date"
            name="dob"
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
            onChange={handelChange}
            value={formData.dob}
            required
          />
          <TextField
            label="Phone Number"
            type="tel"
            name="phone"
            fullWidth
            margin="normal"
            onChange={handelChange}
            value={formData.phone}
            required
          />
          <TextField
            label="Email ID"
            type="email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handelChange}
            value={formData.email}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            onChange={handelChange}
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
