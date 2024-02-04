import React from 'react'
import { Button, Dialog, Typography, Box } from '@mui/material'
import { useDialogContext } from '@/context'
import { usePortifolio } from '@/hooks'

const DeleteDialog = () => {
  const { handleDeleteClose, deleteOpen, handleConfOpen, portifolio } = useDialogContext()

  const { deletePortifolio } = usePortifolio()

  const handleDelete = () => {
    handleConfOpen()
    deletePortifolio(portifolio.portfolioId)
  }

  return (
    <Dialog open={deleteOpen} onClose={handleDeleteClose}>
      <Box
        sx={{
          p: { xs: '24px', md: '40px 42px' },
        }}
      >
        <Typography variant="h5">Deseja Excluir?</Typography>
        <Typography
          variant="body1"
          sx={{
            my: 4,
            width: { xs: '100%', sm: 288, md: 337 },
          }}
        >
          Se você prosseguir irá excluir o projeto do seu portfólio
        </Typography>

        <Box>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Excluir
          </Button>
          <Button
            variant="contained"
            sx={{
              ml: 2,
            }}
            color="error"
            onClick={handleDeleteClose}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default DeleteDialog
