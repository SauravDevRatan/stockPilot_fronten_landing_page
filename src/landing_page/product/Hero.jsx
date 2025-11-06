import { Box, Divider, Typography } from "@mui/material";
import Left from "./Leftimg.jsx";
import Right from "./Rightimg.jsx";
import { Link } from "react-router-dom";

function Hero() {
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
          StockPilot Products
        </Typography>
        <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
          Sleek, modern, and intuitive trading platforms
        </Typography>
        <Typography variant="h6" sx={{ m: 1, color: "text.secondary" }}>
          Check out our <Link to="/offering" style={{textDecoration:"none",color:"rgba(9, 87, 188, 1)"}}>investment offerings → </Link> 
        </Typography>
      </Box>

      <Divider sx={{ width: "80%", mx: "auto", my: 2 }} />

      {/* ======= Kite Section ======= */}
        <Left 
                title="Kite" 
                img="/media/images/kite.png"
                t1="Our ultra-fast flagship trading platform with" 
                t2="streaming market data, advanced charts, an" 
                t3="elegant UI, and more. Enjoy the Kite" 
                t4="experience seamlessly on your Android and" 
                t5="iOS devices." 
        />

      {/* ======= Console Section ======= */}
        <Right 
                title="Console" 
                img="/media/images/console.png"
                t1="The central dashboard for your StockPilot" 
                t2="account. Gain insights into your trades and" 
                t3="investments with in-depth reports and" 
                t4="visualisations." 
                t5="" 
        />

      {/* ======= Coin Section ======= */}
        <Left 
                title="Coin" 
                img="/media/images/coin.png"
                t1="Buy direct mutual funds online, commission-free," 
                t2="delivered directly to your Demat account. Enjoy" 
                t3="the investment experience on your Android and" 
                t4="iOS devices." 
                t5="" 
        />

      {/* ======= Kite Connect API Section ======= */}
        <Right 
                title="Kite Connect API" 
                img="/media/images/kiteconnect.png"
                t1="Build powerful trading platforms and " 
                t2="experiences with our simple HTTP/JSON APIs." 
                t3="If you are a startup, build your investment app" 
                t4="and showcase it to our client base." 
                t5="" 
        />

      {/* ======= Varsity Mobile Section ======= */}
       <Left 
                title="Varsity Mobile" 
                img="/media/images/varsity.png"
                t1="An easy-to-grasp collection of stock market" 
                t2="lessons with in-depth coverage and" 
                t3="tillustrations. Content is broken down into" 
                t4="bite-size cards to help you learn on the go." 
                t5="" 
        />
    </>
  );
}

export default Hero;
