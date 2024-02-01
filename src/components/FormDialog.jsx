import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
  Stack,
  Autocomplete,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useDialogContext } from '@/context'
import { useEffect, useState } from 'react'
import { usePortifolio } from '@/hooks'

const FormDialog = () => {
  const {
    setPortifolio,
    formOpen,
    handleConfOpen,
    handleDetailsOpen,
    handleFormClose } = useDialogContext()

  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm()

  const [selectedTags, setSelectedTags] = useState([])
  const [tagsError, setTagsError] = useState(false)
  const { createPortifolio, updatePortifolio, tags } = usePortifolio()

  useEffect(() => {
    reset({
      titulo: '',
      link: '',
      descricao: ''
    })
  }, [isSubmitSuccessful, reset])



  const handleChange = (_, newTags) => {
    if (newTags.length <= 2) {
      setSelectedTags(newTags)
    }
    newTags.length === 0 ? setTagsError(true) : setTagsError(false)
  }


  const id = 1
  const onSubmit = (data) => {
    const portifolio = { ...data, tags: selectedTags }
    handleConfOpen()
    id != 0 ? updatePortifolio() : createPortifolio(portifolio)
    console.log(portifolio)
  }

  const handleSave = () => {
    selectedTags.length === 0 ? setTagsError(true) : setTagsError(false)
    handleSubmit(onSubmit)()
    setSelectedTags([])
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
                multiple
                id="tags-outlined"
                name='tags'
                options={tags}
                getOptionLabel={(option) => option}
                value={selectedTags}
                filterSelectedOptions
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tags"
                    fullWidth
                    error={tagsError}
                    helperText={tagsError ? 'Selecione uma tag' : ''}
                  />
                )}
                onChange={handleChange}
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
            onClick={handleDetailsOpen}
          >
            Visualizar publicação
          </Typography>
          <Button variant="contained" color="secondary" onClick={handleSave}>
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
