
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Tooltip } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="outer">
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, }}>
        <Toolbar>

          <Typography  component="div" variant="h6"  sx={{ flexGrow: 1 }} >
            <Stack direction="row" spacing={6}><span></span>
            <span></span>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>
            STOCKPILOT
            {/* <img
              src="/media/images/stockpilot_textlogo.svg"
              alt="Logo"
              style={{ height: '40px', verticalAlign: 'middle', }}
            /> */}
            </Link>
            </Stack>
          </Typography>
          <Stack direction="row" spacing={6}>
            
            <Button color="inherit"><Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Signup</Link></Button>
            <Button color="inherit"><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>About</Link></Button>
            <Button color="inherit"><Link to="/product" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link></Button>
            <Button color="inherit"><Link to="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</Link></Button>
            <Button color="inherit"><Link to="/support" style={{ color: 'inherit', textDecoration: 'none' }}>Support</Link></Button>
            <Tooltip title="Explore Dashboard" arrow>
              <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ ml: 1 ,}}>
               <Link to="https://stockpilot-dashboard.onrender.com" style={{color:"white"}}><MenuIcon  /></Link>
              </IconButton>
            </Tooltip>
            <span></span>
            <span></span>
          </Stack>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Navbar;
