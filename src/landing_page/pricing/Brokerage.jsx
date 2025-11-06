import React from "react";
import { Box, Tabs, Tab, Typography} from "@mui/material";
import EquityContent from "./EquityContent";
import CurrencyContent from "./currencyContent";
import CommodityContent from "./commodityContent.jsx";

function Brokerage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (e,i) => {
    setValue(i);
  };

  return (
    <Box sx={{ width: "80%",m:"auto" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Equity" />
        <Tab label="Currency" />
        <Tab label="Commodity" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {value === 0 && <Typography component="div"><EquityContent/></Typography>}
        {value === 1 && <Typography component="div"><CurrencyContent/></Typography>}
        {value === 2 && <Typography component="div"><CommodityContent/></Typography>}
      </Box>
    </Box>
  );
}

export default Brokerage;
