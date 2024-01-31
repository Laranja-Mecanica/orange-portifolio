import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  Stack,
  Autocomplete,
  Chip
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDialogContext } from '@/context'
import { useState } from 'react'
import { usePortifolio } from '@/hooks'

const FormDialog = () => {
  const {
    setPortifolio,
    formOpen,
    handleConfOpen,
    handleDetailsOpen,
    handleFormClose } = useDialogContext()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { createPortifolio, updatePortifolio } = usePortifolio()

  const [selectedTags, setSelectedTags] = useState([])

  const id = 1
  const onSubmit = (data) => {
    console.log({ ...data, tags: selectedTags })
    handleConfOpen()
    id != 0 ? updatePortifolio() : createPortifolio()
    setSelectedTags([])
  }

  console.log('RENDER')

  console.log(selectedTags)

  const tags = selectedTags.length >= 2 ? [] : ['UX', 'UI', 'Web']

  const handleDelete = () => {
    /* setSelectedTags() */
    console.log('ok')
  }

  return (
    <Dialog open={formOpen} onClose={handleFormClose} fullWidth={true} maxWidth={'md'}>
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
            <Stack spacing={3} sx={{ width: '100%' }}

            >

              <Autocomplete
                /* disabled */
                multiple
                id="tags-outlined"
                name='tags'
                options={tags}
                getOptionLabel={(option) => option}

                /*  renderTags={(tagValue, getTagProps) =>
                   tagValue.map((option, index) => (
                     <Chip
                       label={option}
                       onDelete={() => console.log('okk')}
                       {...getTagProps({ index })}
                     />
                   ))
                 } */

                filterSelectedOptions
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tags"
                    fullWidth
                  />
                )}
                onChange={(_, newTag) => (selectedTags.length < 2) ? setSelectedTags(newTag) : ''}
              />
            </Stack>
            <Chip
              label="Clickable Deletable"
              onDelete={handleDelete}
            />
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
            onClick={handleDetailsOpen}
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
              handleFormClose()
              setPortifolio({
                id: 0,
                name: 'TESTE',
                img: 'portifolio3',
                date: '12/23',
                user: {
                  name: 'Camila Soares',
                  proPic: 'user3',
                },
                tags: ['UX', 'HTML'],
              })
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
