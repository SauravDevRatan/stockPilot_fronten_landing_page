import { Box ,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



function Hero() {
    return ( 
    < >
    <Box sx={{backgroundColor:"#f9f9f9"}}>
    <Box sx={{display:'flex',width:"80%",justifyContent:"space-between",mx:"auto",py:5,backgroundColor:""}}>
        <Typography variant='h4'>Support Portal</Typography>
        <Button sx={{backgroundColor:"#1976d2",color:"white"}}>My Tickets</Button>
    </Box>
    <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '80%' } ,display:"flex",alignItems:'center',justifyContent:"center",pb:8}}
        noValidate
        autoComplete="off">
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </Box>
    </Box>
    
    </>
     );
}

export default Hero;