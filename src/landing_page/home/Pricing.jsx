import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import Stack from '@mui/material/Stack';
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { Link } from 'react-router-dom';


function Pricing() {
    return ( 
        <>
        <Box
        sx={{
        minHeight: "70vh",
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
                flexDirection:"column",
                
            }}>
                    <Typography
                            variant="h4"
                            sx={{ mt: 3 }}>Unbeatable pricing
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3,mb:3 }}>
                                We pioneered the concept of discount broking and price <br/>transparency in India. Flat fees and no hidden charges.
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button color="primary"><Link to="/pricing" style={{textDecoration:"none",color:"inherit"}}>See pricing &nbsp;</Link><TrendingFlatIcon/></Button>
                    </Stack>
                    </Box>
                     <Box
                     sx={{
                display:"flex",
                flexDirection:"row",
                
            }}>
                <img src="/media/images/pricing0.svg" alt="" 
                 style={{
                        width: "80%",
                        maxWidth: "150px",
                        height: "auto",
                        }}
                />
                <Typography
                    variant="h7"
                    color="text.secondary"
                    sx={{ mt: 7,ml:-6 }}>Free account opening
                </Typography>
                <img src="/media/images/pricingEquity.svg" alt="" style={{
                        width: "80%",
                        maxWidth: "150px",
                        height: "auto",
                        }}/>
                <Typography
                    variant="h7"
                    color="text.secondary"
                    sx={{ mt: 7,ml:-6 }}>Free equity delivery <br/>and direct mutual funds
                </Typography>
                <img src="/media/images/intradayTrades.svg" alt="" style={{
                        width: "80%",
                        maxWidth: "150px",
                        height: "auto",
                        }}/>
                <Typography
                    variant="h7"
                    color="text.secondary"
                    sx={{ mt: 7,ml:-3 }}>Intraday and F&O
                </Typography>
            </Box>
            </Box>
           
        </>
     );
}

export default Pricing;