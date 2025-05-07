import { AppBar, Box, Toolbar, Button} from "@mui/material";
import logo from '../assets/images/ferrari-logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar variant="elevation" position="sticky">
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{
              width: 80,
              my: 1,
            }}
          />
          <Box sx={{ flex: 1 }}>
            <Button component={Link} to='/' color="inherit">Home</Button>
            <Button component={Link} to='/about' color="inherit">About</Button>
            <Button component={Link} to='/contact' color="inherit">Contact</Button>
          </Box>
          <Button variant="contained" component={Link} to='/login' color="warning">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
