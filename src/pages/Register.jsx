import { Alert, Box, Button, Paper, Snackbar, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
  };

  const handelChange = (event) => {
    setFormData(
      {
        ...formData,
        [event.target.name]: event.target.value
      }
    )
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    try{
      await axios.post('http://localhost:3000/api/user/register', formData)
      navigate('/login')      
    }catch(error){
      console.log(error)
    }
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
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          onClose={handleClose}
        >
          User Registered Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
