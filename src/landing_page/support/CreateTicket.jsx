import Skel from "./skelCreateTicket";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AirlinesIcon from '@mui/icons-material/Airlines';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

function CreateTicket() {
    
    return ( 
        <>
        <Skel title={<AddCircleOutlineIcon/>} data={"Account Opening"} col={["Resident individual","Minor","Non Resident Indian (NRI)","Company, Partnership, HUF and LLP","Glossary"]}/>
        <Skel title={<PersonOutlineIcon/>} data={"Your StockPilot Account"} col={["Your Profile","Account modification","Client Master Report (CMR) and Depository Participant (DP)","Nomination","Transfer and conversion of securities"]} />
        <Skel title={<AirlinesIcon/>} data={"Kite"} col={["IPO","Trading FAQs","Margin Trading Facility (MTF) and Margins","Charts and orders","Alerts and Nudges","General"]}/>
        <Skel title={<CurrencyRupeeIcon/>} data={"Funds"} col={["Add money","Withdraw money","Add bank accounts","eMandates"]}/>
        <Skel title={<OfflineBoltIcon/>} data={"Console"} col={["Portfolio","Corporate actions","Funds statement","Reports","Profile","Segments"]}/>
        <Skel title={<FiberSmartRecordIcon/>} data={"Coin"} col={["Mutual funds","National Pension Scheme (NPS)","Fixed Deposit (FD)","Features on Coin","Payments and Orders","General"]}/>
        </>
     );
}

export default CreateTicket;