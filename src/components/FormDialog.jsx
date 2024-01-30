import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { use, useState } from 'react'

const FormDialog = ({ open, onClick, onClose, onClickDetails }) => {
  const [portifolio, setPortifilio] = useState({ id: 0, titulo: '', tag: '', descricao: '', link: '' })

  const handleInputChange = e => {
    setPortifilio({ ...portifolio, [e.target.name]: e.target.value })
  }

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
            <TextField
              label="Titulo"
              name='titulo'
              value={portifolio.titulo}
              onChange={handleInputChange}
            />
            <TextField
              name='tag'
              label="Tags"
              value={portifolio.tag}
              onChange={handleInputChange}
            />
            <TextField
              name='link'
              label="Link"
              value={portifolio.link}
              onChange={handleInputChange}
            />
            <TextField
              name='descricao'
              label="Descrição"
              value={portifolio.descricao}
              onChange={handleInputChange}
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
            onClick={onClickDetails}
          >
            Visualizar publicação
          </Typography>
          <Button variant="contained" color="secondary" onClick={onClick}>
            Salvar
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            color="error"
            onClick={() => {
              onClose()
              setPortifilio({ id: 0, titulo: '', descricao: '' })
            }}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default FormDialog
