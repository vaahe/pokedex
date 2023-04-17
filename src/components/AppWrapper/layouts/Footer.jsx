import React from 'react';
import { Box, Typography } from '@mui/material'

import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box sx={{ backgroundColor: 'rgb(25, 118, 210)', px: 12, height: '200px' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box
          component="img"
          sx={{ height: 64, mt: 1 }}
          alt="Pokedex logo"
          src={"https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"}
        />
        <Box component="div" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around" }}>
          <TwitterIcon />
          <LinkedInIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      </Box>
      <Typography component="p" sx={{ color: "white", textAlign: "center" }}>All Rights Reserved {year}</Typography>
    </Box>
  )
}
