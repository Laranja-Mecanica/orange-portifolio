import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded'
import { Box, Typography } from '@mui/material'

function BlankCard({ onClick }) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 258,
        backgroundColor: '#E6E9F2',
        gap: 2,
        borderRadius: 1,
        mb: { xs: 3, md: 0 },
        cursor: 'pointer',
      }}
    >
      <PhotoLibraryRoundedIcon sx={{ fontSize: 46 }} />

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          textAlign: 'left',
          color: 'neutral.120',
          opacity: '60%',
          width: 270,
        }}
      >
        Adicione seu primeiro projeto
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        sx={{
          textAlign: 'left',
          color: 'neutral.120',
          opacity: '60%',
          maxWidth: 270,
        }}
      >
        Compartilhe seus projetos com milhares de pessoas
      </Typography>
    </Box>
  )
}

export default BlankCard
