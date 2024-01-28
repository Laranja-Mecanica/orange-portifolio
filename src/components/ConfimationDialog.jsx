import React from 'react'
import { Button, Dialog, Typography, Box } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ConfimationDialog = ({ open, onClose, onClick }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{
          py: 4,
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: { xs: '100%', sm: 255 },
            mx: { sm: 4 },
          }}
        >
          <Typography variant="h5">Projeto adicionado com sucesso!</Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            height: 40,
            my: 3,
          }}
        >
          <CheckCircleIcon
            color="success"
            sx={{
              height: 40,
              width: 40,
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={onClick}
            sx={{
              px: '22px',
            }}
          >
            Voltar para projetos
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default ConfimationDialog
