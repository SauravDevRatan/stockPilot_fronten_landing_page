import React from 'react';
import Stack from '@mui/material/Stack';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


function Stats() {
    return ( 
        <>
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
                flexDirection:"column",
                margin:"8rem"
            }}>
                <Typography
                            variant="h5"
                            sx={{ mt: 3 }}>Trust with confidence
                </Typography>
                
                    <Typography
                            variant="h6"
                            sx={{ mt: 3 }}>Customer-first always
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3 }}>
                                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </Typography>
                    <Typography
                            variant="h6"
                            sx={{ mt: 3 }}>No spam or gimmicks
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3 }}>
                                No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </Typography>
                    <Typography
                            variant="h6"
                            sx={{ mt: 3 }}>The Zerodha universe
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3 }}>
                                Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </Typography>
                    <Typography
                            variant="h6"
                            sx={{ mt: 3 }}>Do better with money
                    </Typography>
                    <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ mt: 3 }}>
                             With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.   
                    </Typography>
            </Box>
            <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                margin:"8rem"
            }}>
                <div><img src="/media/images/ecosystem.png" alt="" 
                style={{
                    width: "600px",
                    height: "auto",
                    margin:"2rem"
                    }}/>
                </div>
                <Box
                sx={{
                        display: "flex",
                        flexDirection: "column", // stack vertically
                        justifyContent: "center", // vertical center
                        alignItems: "center", // horizontal center
                        textAlign: "center",
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        
                        <Button endIcon={<TrendingFlatIcon />}><Link to="/product"  style={{textDecoration:"none",color:"inherit"}}>Explore Our Products </Link></Button>
                        <Button  endIcon={<TrendingFlatIcon />}><Link to="http://localhost:5173/" color="primary" style={{textDecoration:"none",color:"inherit"}}>Try Kite demo </Link></Button>
                    </Stack>
                </Box>
            </Box>
        </Box>
        <Box
              sx={{
                display: "flex",
                flexDirection: "column", // stack vertically
                justifyContent: "center", // vertical center
                alignItems: "center", 
              }}
            >
                <img src="/media/images/pressLogos.png" alt="logo" />
            </Box>
        </>
     );
}

export default Stats;