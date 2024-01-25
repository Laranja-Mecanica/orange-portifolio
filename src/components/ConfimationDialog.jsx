import React from 'react'
import {
  Button,
  Dialog,
  Typography,
  Box
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ConfimationDialog = ({ open, onClose, onClick }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        width: { xs: 412, md: 415 },
        height: 302,
        m: 'auto',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography variant="h5">
          Projeto adicionado com sucesso!
        </Typography>
      </Box>
      <Box sx={{
        flexGrow: 1,
        textAlign: 'center',
        height: 40,
        my: 3
      }}>
        <CheckCircleIcon
          color='success'
          sx={{
            height: 40,
            width: 40
          }}
        />

      </Box>
      <Box sx={{
        pb: 4,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Button
          variant='contained'
          color="secondary"
          onClick={onClick}
          sx={{
            mx: 'auto',
            px: '22px'
          }}
        >
          Voltar para projetos
        </Button>
      </Box>
    </Dialog>
  )
}

export default ConfimationDialog