import {Box,Typography} from "@mui/material";

function Hero() {
    return (
        <>
        <Box
        sx={{
            textAlign:"center",
            minHeight:"40vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            // color:"text.secondary"
            
        }}>
            <Typography variant="h5" >
            "We pioneered the discount broking model in India. <br></br>
            Now, we are breaking ground with our technology."
            </Typography>
        </Box>
        </>
     );
}

export default Hero;