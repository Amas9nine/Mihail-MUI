import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography, Badge } from '@mui/material'
import React from 'react'

function Header({ handleCard, orderLen }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          google
        </Typography>
        <IconButton
          color='inherit'
          onClick={handleCard}>
          <Badge
            color="secondary"
            badgeContent={orderLen}
          >
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header