import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function UploadImagem({ thumb, handleSetFiles }) {
  const [ hasFileSelected, setHasFileSelected] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    handleSetFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    
    setHasFileSelected(true)
  }, [handleSetFiles])

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop
  })

  return (
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
        cursor: 'pointer',
        overflow: 'hidden',
      }} >

      <input { ...getInputProps()} />
      
        {
          hasFileSelected ? 

              <Image src={thumb}  width={389} height={304} alt='' onLoad={() => { URL.revokeObjectURL(thumb)}} style={{
              width: 'fit-content',
            }} />
          : 
          <>
            <PhotoLibraryIcon sx={{ fontSize: 46 }} />
            <Typography variant='body2' sx={{ textAlign: 'left', maxWidth: 270, color: 'neutral.120', opacity: '60%' }}>Compartilhe seu talento com milhares de pessoas</Typography>
          </>
        }
    </Box>
  )
}