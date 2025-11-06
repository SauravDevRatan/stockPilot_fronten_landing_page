import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from 'react-router-dom';



function Education() {
    return ( 
        <Box
        sx={{
        
        display: "flex",
        flexDirection: "row", // stack vertically
        justifyContent: "center", // vertical center
        alignItems: "center", // horizontal center
        textAlign: "left",
        backgroundColor: "", // light background (optional)
        }}>
        <Box
        sx={{
            display:"flex",
            flexDirection:"row",  
            }}>
                <img src="/media/images/education.svg" alt="" 
                 style={{
                        width: "100%",
                        height: "auto",
                        }}
                />
            </Box>
            <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                ml:18
            }}>
                    <Typography
                            variant="h5"
                            sx={{ mt: 3 }}>Free and open market education
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3,mb:3 }}>
                               Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="primary">Varsity &nbsp;<TrendingFlatIcon/></Button>
                    </Stack>
                    
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3,mb:3 }}>
                                TradingQ&A, the most active trading and investment community in<br/> India for all your market related queries.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="primary"><Link to="/support" style={{textDecoration:"none",color:"inherit"}}>TradingQ&A &nbsp;</Link><TrendingFlatIcon/></Button>
                    </Stack>
            </Box>
                    
        </Box>
     );
}

export default Education;