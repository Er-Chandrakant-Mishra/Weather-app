// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: 2,
        marginTop: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Coder By Chandrakant Mishra Weather Dashboard. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
