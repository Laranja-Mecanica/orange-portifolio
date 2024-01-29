import React from 'react'
import { Button, Dialog, Typography, Box, TextField } from '@mui/material'

const FormDialog = ({ open, onClick, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'md'}>
      <Box
        sx={{
          m: { xs: '16px 24px', md: '24px 32px' },
        }}
      >
        <Typography variant="h5">Adicionar projeto</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            my: { xs: 2 },
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Selecione o conteúdo que você deseja fazer upload
            </Typography>
            <div
              className="card"
              style={{
                height: 304,
                border: '1px solid black',
              }}
            ></div>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              flexGrow: 1,
            }}
          >
            <TextField id="" label="Titulo" />
            <TextField id="" label="Tags" />
            <TextField id="" label="Link" />
            <TextField
              id=""
              label="Descrição"
              multiline
              rows={4}
              sx={{ height: 120 }}
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 2,
              cursor: 'pointer',
            }}
            onClick={() => console.log('ok')}
          >
            Visualizar publicação
          </Typography>
          <Button variant="contained" color="secondary">
            Salvar
          </Button>
          <Button variant="contained" sx={{ ml: 2 }} disabled>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default FormDialog
