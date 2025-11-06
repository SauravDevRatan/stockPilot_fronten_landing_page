import React from 'react';
import { Box,Typography,Button, } from '@mui/material';
import { Link } from 'react-router-dom';


function Universe() {
    return ( 
        <>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",p:15}}>
            <Typography variant="h4" sx={{m:2}}>The StockPilot Universe</Typography>
            <Typography variant="h6" sx={{m:1}}>Extend your trading and investment experience even further with our partner platforms</Typography>
            <Button
                variant="contained"
                size="large"
                sx={{
                mt: 2,
                borderRadius: "8px",
                textTransform: "none",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
                }}
            >
                <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Signup For Free</Link>
            </Button>
            </Box>
        </>
     );
}

export default Universe;