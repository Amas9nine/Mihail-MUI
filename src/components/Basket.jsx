import { Divider, Drawer, List, ListItemIcon, ListItemText, Toolbar, Box, ListItem, Typography } from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'
import React from 'react'
import BasketItem from './BasketItem'



function Basket({ cardOpen, closeCard = Function.prototype, order, removeFromOrder }) {
  return (
    <Drawer
      anchor="right"
      open={cardOpen}
      onClose={closeCard}
    >
      <List sx={{ width: "400px" }}>
        <ListItemIcon sx={{ flexGrow: 2 }}>
          <ShoppingBasket />
        </ListItemIcon>
        <ListItemText primary="Корзина" />
        {order.length ? (
          <>
            {order.map((item) => (<BasketItem removeFromOrder={removeFromOrder} key={item.name}{...item} />))}
            < Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
              </Typography>
            </ListItem>
          </>
        ) : (
          <ListItem>
            Корзина пустая ! ! !
          </ListItem>
        )}
      </List>
      <Divider />
    </Drawer >
  )
}

export default Basket