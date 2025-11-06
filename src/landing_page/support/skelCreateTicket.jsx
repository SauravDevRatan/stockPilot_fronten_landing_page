import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


function Skel({title,data,col}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={{ width:"80%",mx:"auto",my:3 }} >
      <ListItemButton onClick={handleClick} sx={{backgroundColor:"#f9f9f9"}}>
        <ListItemIcon sx={{color:"#1976d2",}}>
          {title}
        </ListItemIcon>
        <ListItemText primary={data} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
       <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{color:"#1976d2"}}>
          {col.map((e, i) => (
            <ListItemButton key={i} sx={{ pl: 6 }}>
              <ListItemText primary={e} />
            </ListItemButton>
          ))}
        </List>
      </Collapse> 
    </List>
  );
}

export default Skel;

