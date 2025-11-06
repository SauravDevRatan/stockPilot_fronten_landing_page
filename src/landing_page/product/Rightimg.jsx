
import { Box, Typography } from "@mui/material";

function Right({title,t1,t2,t3,t4,t5,img}) {
    return (
        <>
        <Box sx={{ display: "flex", gap: 7, m: 6,textAlign:"center" }}>
        

        <Box
          sx={{
            flex: 1,
            px: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center"

          }}
        >
          <Typography variant="h4" sx={{ m: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
            {t1} <br />
            {t2} <br />
            {t3} <br />
            {t4} <br />
            {t5}
          </Typography>
        </Box>
        <Box sx={{ flex: 1, px: 4 ,alignItems:"center"}}>
          <img src={img} alt={title} />
        </Box>
      </Box>
        </>
     );
}

export default Right;