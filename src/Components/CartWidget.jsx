import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget () {
  const cartItemCount = 4; 

  return (
    <Badge badgeContent={cartItemCount} color="secondary">
      <ShoppingCartIcon style={{ color: 'white', fontSize: '2rem' }} />
    </Badge>
  )
}

export default CartWidget;
