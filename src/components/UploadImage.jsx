import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Alert, Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function UploadImagem({ files, handleSetFiles, hasFileSelected, handleSetHasFileSelected, isUploading }) {
  const [ isRejected, setIsRejected] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    handleSetFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    
    handleSetHasFileSelected(true)
    setIsRejected(false)
  }, [handleSetFiles, handleSetHasFileSelected])

  const onDropRejected = () => {
    handleSetFiles([])
    handleSetHasFileSelected(false)
    setIsRejected(true)
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg'],
    },
    maxFiles: 1,
    maxSize: 1024 * 1024 * 2, // 2MB in bytes
    onDrop,
    onDropRejected,
    disabled: isUploading,
  })

  return (
    <>
      {
        isRejected ? <Alert severity="warning" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>Somente arquivos <strong>.jpeg, .jpg, .png</strong> de até <strong>2MB</strong>.</Alert> : null
      }
      
      <Box {...getRootProps()}
        className="card"
        sx={{
          height: 304,
          backgroundColor: 'neutral.70',
          borderRadius: 1,
          maxWidth: { sm: '100%', md: 389, },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          cursor: isUploading ? 'not-allowed' : 'pointer',
          overflow: 'hidden',
        }} >

        <input { ...getInputProps()} />
        
          {
            hasFileSelected ? 
                <Image src={files[0].preview}  width={389} height={304} alt='' onLoad={() => { URL.revokeObjectURL(files[0].preview)}} style={{
                width: 'fit-content',
              }} />
            : 
            <>
              <PhotoLibraryIcon sx={{ fontSize: 46 }} />
              <Typography variant='body2' sx={{ textAlign: 'left', maxWidth: 270, color: 'neutral.120', opacity: '60%' }}>Compartilhe seu talento com milhares de pessoas</Typography>
            </>
          }
      </Box>
    </>
  )
}
