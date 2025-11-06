import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <Box
      sx={{
        minHeight: "100vh", // full screen height
        display: "flex",
        flexDirection: "column", // stack vertically
        justifyContent: "center", // vertical center
        alignItems: "center", // horizontal center
        textAlign: "center",
        gap: 2,
        backgroundColor: "", // light background (optional)
        padding: 3,
      }}
    >
      <img
        src="/media/images/homeHero.png"
        alt="Hero banner"
        style={{
          width: "80%",
          maxWidth: "800px",
          height: "auto",
          marginBottom:"6rem"
        }}
      />

      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ mt: 3 }}
      >
        Invest in everything
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
      >
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,bonds, and more.
      </Typography>

      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          borderRadius: "8px",
          textTransform: "none",
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
      >
        <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Signup</Link>
      </Button>
    </Box>
  );
}

export default Hero;
