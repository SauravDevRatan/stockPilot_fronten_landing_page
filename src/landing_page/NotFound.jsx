import React from 'react';
import {Box, Typography} from "@mui/material";


function NOtFound() {
    return ( 
        <>
        <Box
        sx={{
        display: "flex",
        flexDirection: "column", // stack vertically
        justifyContent: "center", // vertical center
        alignItems: "center", // horizontal center
        textAlign: "center",
        margin:10
      }}
        >
            <Typography>
                <h1>404 NotFound</h1>
            </Typography>
            <Typography>
                <h3>Soory, Page you are looking for does not exist !</h3>
            </Typography>
        </Box>
        
        </>
     );
}

export default NOtFound;