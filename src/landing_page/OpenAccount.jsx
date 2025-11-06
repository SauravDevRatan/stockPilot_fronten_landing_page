import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


function OpenAccount() {
    return ( 
        <>
        <Box
        sx={{
            minHeight: "50vh", // full screen height
            display: "flex",
            flexDirection: "column", // stack vertically
            justifyContent: "center", // vertical center
            alignItems: "center", // horizontal center
            textAlign: "center",
         
        }}
        >
          <Typography
            variant="h5"
            
            sx={{ mt: 3 }}
        >
            Open a StockPilot account
        </Typography>

        <Typography
            variant="h6"
            color="text.secondary"
        >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
        </Typography>

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
            <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Signup</Link>
        </Button>  
        </Box>
        </>
     );
}

export default OpenAccount;