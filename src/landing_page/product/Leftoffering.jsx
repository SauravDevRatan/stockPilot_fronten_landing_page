
import { Box, Typography,List, ListItem } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {Link} from "react-router-dom";

function LeftOffer({title,t1,t2,t3,img,avail}) {
    return (
        <>
        <Box sx={{ display: "flex", gap: 7, m: 6,alignItems:"center",justifyContent:"center" }}>
        <Box sx={{ flex: 1, px: 4,m: 6 }}>
          <img src={img} alt={title} />
        </Box>

        <Box
          sx={{
            flex: 1,
            px: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" sx={{ m: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
            {t1} <br />
            {t2} <br />
            {t3} <br /> 
          </Typography>
          <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
            <ErrorOutlineIcon sx={{color: "black",m:"-5px"}}/>&nbsp; Available on
          </Typography>
          {/* sx={{ pl: 2 }} */}
            <List variant="h6" sx={{ color: "text.secondary" ,mb:2}}>
            {avail.map((e, i) => (
                <Link
                key={i}
                to="#"
                style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    color: "inherit",
                    textDecoration: "none",
                }}
                >
                {e} →
                </Link>
            ))}
            </List>
          
        </Box>
      </Box>
        </>
     );
}



export default LeftOffer;