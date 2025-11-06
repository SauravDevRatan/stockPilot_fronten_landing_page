import React from 'react';
import { Box, Typography, Divider, Avatar ,Link} from '@mui/material';

function People() {
  return (
    <>
      <Divider sx={{ width: '80%', mx: 'auto', my: 2 }} />

      <Box sx={{ display: 'flex', gap: 10, mb:10}}>
        {/* Left Part */}
        <Box
          sx={{ 
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1, // spacing between elements
          }}
        >
          <Avatar
            src="/media/images/SAURAV KUMAR.jpg"
            alt="Saurav Kumar"
            sx={{ width: 250, height: 250 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Saurav Kumar
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            Software Engineer
          </Typography>
        </Box>

        {/* Right Part */}
        <Box
          sx={{
            flex: 1,
            p: 4,
            display: 'flex',
            flexDirection:'column',
            justifyContent: "flex-start",
          }}
        >
          <Typography variant="h4" mx={6} mb={8}>People</Typography>
          <Typography variant="h6" mx={6} mb={4} color='text.secondary'>Saurav Kumar is a passionate software engineer who has been building innovative solutions in the tech space. With a focus on crafting seamless user experiences, he thrives on solving complex problems through clean, efficient code.</Typography>
          <Typography variant="h6" mx={6} mb={4} color='text.secondary'>When he’s not coding, Saurav enjoys exploring the latest in technology and sharpening his skills through personal projects.</Typography>
          <Typography variant="h6" mx={6} mb={4} color='text.secondary'>Connect with him on <Link href="https://www.linkedin.com/in/saurav-kumar-5aaa22270/" style={{textDecoration:"none"}}>LinkedIn</Link> / <Link href="https://github.com/SauravDevRatan" style={{textDecoration:"none"}}>GitHub</Link> </Typography>
        </Box>
      </Box>
    </>
  );
}

export default People;
