import { Box } from '@mui/material'
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'rgb(25, 118, 210)', height: '200px' }}>
      <Box
        component="img"
        sx={{ height: 64 }}
        alt="Pokedex logo"
        src={"https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"}
      />
      <Box component="div">
        <InstagramIcon />
      </Box>
    </Box>
  )
}
