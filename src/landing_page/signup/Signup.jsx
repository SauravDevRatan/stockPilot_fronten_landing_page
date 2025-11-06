import { Typography,Box, Button } from "@mui/material";
import { Link } from "react-router-dom";


function SignUp() {
  
    return ( 
        <>
        <Box sx={{ mt: 10, ml: 5, mb: 5, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography>WANT TO EXPLORE TRADING DASHBOARD</Typography>
        </Box>

        <Box sx={{ mb: 10, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button
            variant="contained"
            component="a"
            href="http://localhost:5173/"
            rel="noopener noreferrer"
            >
            Explore Kite
            </Button>
        </Box>
        </>

     );
}

export default SignUp;