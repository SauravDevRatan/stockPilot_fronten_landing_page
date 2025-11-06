import { Box, Typography } from "@mui/material";
import Cost from "./Cost";


function Hero() {
    return ( 
        <>
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight: "40vh"}}>
            <Typography variant="h4">Charges</Typography>
            <Typography variant="h6" sx={{color:"text.secondary",m:3}}>List of all charges and taxes</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",minHeight: "60vh",gap:6}}>
            <Cost 
             img={"/media/images/pricing0.svg"} 
             title={"Free equity delivery"}
             data={["All equity delivery investments (NSE, BSE),","are absolutely free — ₹ 0 brokerage.",]}
            ></Cost>
            <Cost 
             img={"/media/images/intradayTrades.svg"} 
             title={"Intraday and F&O trades"}
             data={["Flat ₹ 20 or 0.03% (whichever is lower) per","executed order on intraday trades across","equity, currency, and commodity trades. Flat","₹20 on all option trades."]}
            ></Cost>
            <Cost 
             img={"/media/images/pricing0.svg"} 
             title={"Free direct MF"}
             data={["Free direct MF","absolutely free — ₹ 0 commissions & DP","charges."]}
            ></Cost>
        </Box>
        </>
     );
}

export default Hero;