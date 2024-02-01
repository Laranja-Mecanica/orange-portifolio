import { useUploadThing } from '@/utils/uploadthing';
import {
  Alert,
  Box,
  Button,
  Dialog,
  LinearProgress,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { UploadImagem } from './UploadImage';

const FormDialog = ({ open, onClick, onClose }) => {
  const [files, setFiles] = useState([{}])
  const [ hasFileSelected, setHasFileSelected] = useState(false)
  const [ uploadProgress, setUploadProgress] = useState(0)
  const [ hasUploadError, setHasUploadError ] = useState(false)

  const { startUpload, isUploading } = useUploadThing('thumbUploader', {
    onClientUploadComplete: () => {
      onClose()
      setFiles([])
      setHasFileSelected(false)
      // Add cofirmation dialog
    },
    onUploadError: () => {
       setHasUploadError(true)

       setTimeout(() => {
        setHasUploadError(false)
       }, 10000)
    },
    onUploadProgress: (p) => {
      setUploadProgress(p)
    }
  })

  function closeDialog() {
    onClose()
    setFiles([])
    setHasFileSelected(false)
  }

  function handleSetFiles(files) {
    setFiles(files)
  }

  function handleSetHasFileSelected(has) {
    setHasFileSelected(has)
  }

  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      fullWidth={true}
      maxWidth={'md'}
    >
      {
        isUploading ? <LinearProgress variant="determinate" value={uploadProgress} color='secondary'  /> : null
      }

      <Box
        sx={{
          m: { xs: '16px 24px', md: '24px 32px' }
        }}
      >
        {
          hasUploadError ?  <Alert severity="error" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>Tivemos uma falha no upload, tente novamente mais tarde. 😭</Alert> : null
        }
        <Typography variant="h5">
          Adicionar projeto
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            my: { xs: 2 },
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between'
          }}
        >
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ mb: 2 }}
            >
              Selecione o conteúdo que você deseja fazer upload
            </Typography>
            
            <UploadImagem files={files} handleSetFiles={handleSetFiles} hasFileSelected={hasFileSelected} handleSetHasFileSelected={handleSetHasFileSelected} isUploading={isUploading} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              flexGrow: 1
            }}
          >
            <TextField
              id=""
              label="Titulo"
            />
            <TextField
              id=""
              label="Tags"
            />
            <TextField
              id=""
              label="Link"
            />
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
              cursor: 'pointer'
            }}

            onClick={() => console.log('ok')}
          >
            Visualizar publicação
          </Typography>
          <Button 
            variant='contained'
            color='secondary'
            onClick={() => startUpload(files)}
            disabled={!hasFileSelected || isUploading}
            >
              Salvar
          </Button>
          <Button
            variant='contained'
            sx={{ ml: 2 }}
            disabled>
            Cancelar
          </Button>
        </Box>
      </Box>
    </Dialog>
  )
}

export default FormDialog
