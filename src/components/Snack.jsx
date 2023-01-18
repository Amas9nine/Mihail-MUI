import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function Snack({ handleClose, isOpen }) {
  return (
    <Snackbar
      autoHideDuration={3000}
      onClose={handleClose}
      open={isOpen}
    >
      <Alert severity="warning">
        Товар добавлен в Корзину !
      </Alert>
    </Snackbar>
  )
}

export default Snack