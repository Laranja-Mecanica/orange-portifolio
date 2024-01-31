import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  Stack,
  /* Chip, */
  Autocomplete
} from '@mui/material'
import { use, useState } from 'react'
import { useForm } from 'react-hook-form'

const FormDialog = ({ open, onClick, onClose, onClickDetails }) => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }



  console.log('RENDER')

  const tags = ['UX', 'UI', 'Web']

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
              helperText={Boolean(errors?.titulo) ? 'Digite o titulo' : ''}
              error={Boolean(errors?.titulo)}
              {...register('titulo', { required: true })}
            />
            <Stack spacing={3} sx={{ width: '100%' }}>

              <Autocomplete
                multiple
                id="tags-outlined"
                options={tags}
                getOptionLabel={(option) => option}
                filterSelectedOptions
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tags"
                    placeholder="Favorites"
                    fullWidth
                  />
                )}
                sx={{
                  /* maxWidth: 413 */
                }}
              />
            </Stack>
            <TextField
              name='link'
              label="Link"
              helperText={Boolean(errors?.link) ? 'Digite o link' : ''}
              error={Boolean(errors?.link)}
              {...register('link', { required: true })}
            />
            <TextField
              name='descricao'
              label="Descrição"
              multiline
              rows={4}
              sx={{ height: 120 }}
              helperText={Boolean(errors?.descricao) ? 'Digite a descrição' : ''}
              error={Boolean(errors?.descricao)}
              {...register('descricao', { required: true })}
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
          <Button variant="contained" color="secondary" onClick={() => handleSubmit(onSubmit)()}>
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
