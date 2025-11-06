import { Box, Typography } from "@mui/material";


function Cost({img,title,data=[]}) {
    return ( <>
    <Box sx={{textAlign:"center"}}>
    <Typography><img src={img} alt={title} /></Typography>
    <Typography variant="h5" sx={{mb:3}}>{title}</Typography>
    <Typography variant="body1" component="div" sx={{color:"text.secondary"}} >{data.map((e,i)=>(<Box key={i}>{e}</Box>))}</Typography>
    </Box>
    </> );
}

export default Cost;    