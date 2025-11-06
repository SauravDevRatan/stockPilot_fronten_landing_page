import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SendIcon from "@mui/icons-material/Send";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#fafafa", color: "text.primary", py: 6, px: { xs: 3, md: 10 } }}>
      {/* Top Section */}
      <Grid container spacing={4}>
        {/* Logo and Socials */}
        <Grid size={{ xs: 12, md: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#1976d2" }}>
            STOCKPILOT
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            © 2025 – 2025, Stockpilot Broking Ltd. <br /> All rights reserved.
          </Typography>

          <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
            <IconButton size="small"><XIcon /></IconButton>
            <IconButton size="small"><FacebookIcon /></IconButton>
            <IconButton size="small"><InstagramIcon /></IconButton>
            <IconButton size="small"><LinkedInIcon /></IconButton>
            <IconButton size="small"><YouTubeIcon /></IconButton>
            <IconButton size="small"><WhatsAppIcon /></IconButton>
            <IconButton size="small"><TelegramIcon /></IconButton>
            <IconButton size="small"><SendIcon /></IconButton>
          </Box>
        </Grid>

        {/* Account */}
        <Grid size={{ xs: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Account
          </Typography>
          {[
            "Open demat account",
            "Minor demat account",
            "NRI demat account",
            "Commodity",
            "Dematerialisation",
            "Fund transfer",
            "MTF",
            "Referral program",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid size={{ xs: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Support
          </Typography>
          {[
            "Contact us",
            "Support portal",
            "How to file a complaint?",
            "Status of your complaints",
            "Bulletin",
            "Circular",
            "Z-Connect blog",
            "Downloads",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid size={{ xs: 6, md: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Company
          </Typography>
          {[
            "About",
            "Philosophy",
            "Press & media",
            "Careers",
            "StockPilot Cares (CSR)",
            "StockPilot.tech",
            "Open source",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Quick Links */}
        <Grid size={{ xs: 6, md: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Quick links
          </Typography>
          {[
            "Upcoming IPOs",
            "Brokerage charges",
            "Market holidays",
            "Economic calendar",
            "Calculators",
            "Markets",
            "Sectors",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" underline="hover" color="inherit">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 4 }} />

      {/* Bottom Text Section */}
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
        StockPilot Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: 000000000000
        CDSL/NSDL: Depository services through StockPilot Commodities Pvt. Ltd. MCX: 00000;
        SEBI Registration no.: 00000000000000. Registered Address: StockPilot Broking Ltd.,
        For any complaints pertaining to securities broking please write to{" "}
        <Link href="#" underline="hover">complaints@StockPilot.com</Link>,
        for DP related to <Link href="#" underline="hover">dp@StockPilot.com</Link>.
      </Typography>

      <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
        Procedure to file a complaint on <Link href="#" underline="hover">SEBI SCORES</Link>: Register
        on SCORES portal. Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID.
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        <Link href="#" underline="hover">Smart Online Dispute Resolution</Link> |{" "}
        <Link href="#" underline="hover">Grievances Redressal Mechanism</Link>
      </Typography>

      <Typography variant="body2" sx={{ mt: 2, lineHeight: 1.8 }}>
        Investments in securities market are subject to market risks; read all related documents carefully before investing.
      </Typography>

      <Divider sx={{ my: 4 }} />

      {/* Footer Bottom Links */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {[
          "NSE",
          "BSE",
          "MCX",
          "Terms & conditions",
          "Policies & procedures",
          "Privacy policy",
          "Disclosure",
          "For investor's attention",
          "Investor charter",
        ].map((item) => (
          <Link key={item} href="#" underline="hover" color="inherit" variant="body2">
            {item}
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default Footer;
