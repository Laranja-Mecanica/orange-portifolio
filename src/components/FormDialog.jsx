import { useDialogContext } from '@/context'
import { usePortifolio } from '@/hooks'
import { useUploadThing } from '@/utils/uploadthing'
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Dialog,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { UploadImagem } from './UploadImage'
import validator from 'validator'

const FormDialog = () => {
  const [files, setFiles] = useState([{}])
  const [hasFileSelected, setHasFileSelected] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [hasUploadError, setHasUploadError] = useState(false)
  const [tagsError, setTagsError] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([{}])

  const {
    portifolio,
    setPortifolio,
    handleFormClose,
    state,
    dispatch
  } = useDialogContext()



  const [selectedTags, setSelectedTags] = useState([...portifolio.tags])

  const { portfolioId, title, description, link, tags } = portifolio
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      title: 'title',
      description: 'description',
      link: 'link',
    }
  })

  const { optionsTags, updatePortifolio, createPortifolio } = usePortifolio()


  const { startUpload, isUploading } = useUploadThing('thumbUploader', {
    onClientUploadComplete: (file) => {
      setUploadedFiles(file)
      setFiles([])
      setHasFileSelected(false)
    },
    onUploadError: () => {
      setHasUploadError(true)

      setTimeout(() => {
        setHasUploadError(false)
      }, 10000)
    },
    onUploadProgress: (p) => {
      setUploadProgress(p)
    },
  })

  function closeDialog() {
    handleFormClose()
    setFiles([])
    setHasFileSelected(false)
  }

  function handleSetFiles(files) {
    setFiles(files)
  }

  function handleSetHasFileSelected(has) {
    setHasFileSelected(has)
  }

  const handleChange = (_, newTags) => {
    if (newTags.length <= 2) {
      setSelectedTags(newTags)
    }
    newTags.length === 0 ? setTagsError(true) : setTagsError(false)
  }

  const onSubmit = (data) => {
    selectedTags.length === 0 ? setTagsError(true) : setTagsError(false)


    startUpload(files)

    const portifolio = {
      ...data,
      tags: selectedTags,
      thumbKey: uploadedFiles[0].url,

    }


    setTimeout(() => {
      portfolioId !== null ? updatePortifolio(portfolioId, portifolio) : createPortifolio(portifolio)

    }, 10000);


    setSelectedTags([])
    /* handleConfOpen() */
  }

  const showDetails = data => {
    dispatch({ type: 'details' })
    setPortifolio({
      ...portifolio,
      ...data,
      tags: selectedTags,
      thumbUrl: files[0].preview,
      /* user: {
        name: '',
        lastName: ''
      } */
    })

  }

  useEffect(() => {
    reset({
      title: title,
      link: link,
      description: description,
    })
  }, [isSubmitSuccessful, reset, portifolio])

  useEffect(() => {
    setSelectedTags(tags)
  }, [portifolio])


  return (
    <Dialog
      open={state.formOpen}
      onClose={() => dispatch({ type: 'cancel' })}
      fullWidth={true}
      maxWidth={'md'}
    >
      {isUploading ? (
        <LinearProgress
          variant="determinate"
          value={uploadProgress}
          color="secondary"
        />
      ) : null}

      <Box
        sx={{
          m: { xs: '16px 24px', md: '24px 32px' },
        }}
      >
        {hasUploadError ? (
          <Alert
            severity="error"
            sx={{ mb: 1, display: 'flex', alignItems: 'center' }}
          >
            Tivemos uma falha no upload, tente novamente mais tarde. 😭
          </Alert>
        ) : null}
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
          <Box>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Selecione o conteúdo que você deseja fazer upload
            </Typography>

            <UploadImagem
              files={files}
              handleSetFiles={handleSetFiles}
              hasFileSelected={hasFileSelected}
              handleSetHasFileSelected={handleSetHasFileSelected}
              isUploading={isUploading}
            />
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
              label="Título"
              name="title"
              helperText={errors?.title?.type === 'required' ? 'Digite o title' :
                errors?.title?.type === "maxLength" ? 'O titulo pode ter até 25 caracteres' : ''}
              error={Boolean(errors?.title)}
              {...register('title', { required: true, maxLength: 25 })}
            />

            <Stack spacing={3} sx={{ width: '100%' }}>
              <Autocomplete
                multiple
                id="tags-outlined"
                name="tags"
                options={optionsTags}
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
              name="link"
              label="Link"
              helperText={errors?.link ? 'Digite o link' : ''}
              error={Boolean(errors?.link)}
              {...register('link', { required: true, validate: value => validator.isURL(value) })}
            />
            <TextField
              name="description"
              label="Descrição"
              multiline
              rows={4}
              sx={{ height: 120 }}
              helperText={errors?.description?.type === 'required' ? 'Digite a descrição' :
                errors?.description?.type === "maxLength" ? 'O titulo pode ter até 120 caracteres' : ''}
              error={Boolean(errors?.description)}
              {...register('description', { required: true, maxLength: 120 })}
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
            onClick={() => handleSubmit(showDetails)()}
          >
            Visualizar publicação
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleSubmit(onSubmit)()}
            disabled={!hasFileSelected || isUploading}
          >
            Salvar
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            color="error"
            onClick={() => dispatch({ type: 'cancel' })}>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default FormDialog
