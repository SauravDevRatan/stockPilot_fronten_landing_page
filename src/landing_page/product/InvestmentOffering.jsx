import { Box, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OpenAccount from "../OpenAccount.jsx";
import LeftOffer from "./Leftoffering.jsx";
import RightOffer from "./Rightoffering.jsx";

function Offering() {
    return ( 
        <>
        {/* ======= Header Section ======= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 15,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ m: 2, fontWeight: 600 }}>
          Investments
        </Typography>
        <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
          Everything from equities and derivatives to mutual funds and fixed income
        </Typography>
        <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
          Check out our <Link to="/product" style={{textDecoration:"none",color:"rgba(9, 87, 188, 1)"}}>technology offerings → </Link> 
        </Typography>
      </Box>

      <Divider sx={{ width: "80%", mx: "auto", my: 2 }} />
        

        
        {/* ======= // -----------stocks------Right---------// ======= */}
        <LeftOffer 
           title="Stocks"
           t1="Trade stocks for delivery or intraday on over 5000 stocks listed on"
           t2="National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
           t3=""
           img="/media/images/stocksoffering.png"
           avail={["Kite","Consol","Smallcas","StockReports","Strea","Market overvie"]}
        />

        {/* ======= Direct mutual funds------Left-======= */}
        <RightOffer 
           title="Direct mutual funds"
           t1="Invest in over 2000 direct mutual funds directly without a distributor."
           t2="Invest in over 2000 direct mutual funds directly without a distributor."
           t3=""
           img="/media/images/investments-mf.png"
           avail={["Coin"]}
        />

        {/* ======= Futures & Options------Right ======= */}
         <LeftOffer 
           title="Futures & Options"
           t1="Trade metals, oil, and agri commodities on MCX and stock and index"
           t2="futures and options on NSE."
           t3=""
           img="/media/images/investments-fo.png"
           avail={["Kite","Margin calculator","Sensibull","Strea"]}
        />
        
        {/* ======= IPO------Left======= */}
        <RightOffer 
           title="IPO"
           t1="Now apply online and invest in companies listing on the Indian"
           t2="exchanges with an IPO (Initial Public Offering) with your BHIM UPI"
           t3="app."
           img="/media/images/ipo-products.png"
           avail={["Kite","Upcoming IPOs"]}
        />
        
        {/* ======= Gift stocks------Right ======= */}
        <LeftOffer 
           title="Gift stocks"
           t1="Introduce your friends and family to the habit of investing for the long"
           t2="term by gifting them stocks, ETFs, mutual funds and gold bonds. A"
           t3="gift that keeps on giving."
           img="/media/images/gift-offering.png"
           avail={["Send a gift"]}
        />
        
        {/* ======= Fixed income------left ======= */}
        <RightOffer 
           title="Fixed income"
           t1="Invest in bonds with yields better than bank FDs guaranteed by the "
           t2="Government of India."
           t3=""
           img="/media/images/investments-fixedincome.png"
           avail={["Govt. securities"]}
        />

        <OpenAccount/>
        </>
     );
}

export default Offering;