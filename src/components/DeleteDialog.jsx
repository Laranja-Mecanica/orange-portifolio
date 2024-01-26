import React from 'react'
import {
  Button,
  Dialog,
  Typography,
  Box
} from '@mui/material'

const DeleteDialog = ({ open, onClick, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          p: { xs: '24px', md: '40px 42px' },
        }}
      >
        <Typography variant="h5">
          Deseja Excluir?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            my: 4,
            width: { xs: '100%', sm: 288, md: 337 }
          }}
        >
          Se você prosseguir irá excluir o projeto do seu portfólio
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClick}
          >
            Excluir
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2
            }}
            disabled
          >
            Cancelar
          </Button>
        </Box>
      </Box>

    </Dialog>
  )
}

export default DeleteDialog