import {
  BlankCard,
  ConfimationDialog,
  DetailsDialog,
  FormDialog,
  Header,
  SkeletonCard,
} from '@/components'
import { useAppContext } from '@/context/appContext'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const user = () => {
  const { setPortifolio } = useAppContext()

  const [formOpen, setFormOpen] = useState(false)
  const [confOpen, setConfOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)

  const handleFormOpen = () => {
    setFormOpen(true)
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
  }
  const handleFormClose = () => {
    setFormOpen(false)
  }
  const handleConfOpen = () => {
    setConfOpen(true)
    setFormOpen(false)
  }
  const handleConfClose = () => {
    setConfOpen(false)
  }

  const handleDetailsOpen = () => {
    setDetailsOpen(true)
    setFormOpen(false)
  }
  const handleDetailsClose = () => {
    setDetailsOpen(false)
    setFormOpen(true)
  }

  return (
    <>
      <Header />
      <Box
        sx={{
          mx: { xs: 1, md: 3 },
        }}
      >
        <Box
          sx={{
            mt: '185px',
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: '42px' },
            width: 364,
          }}
        >
          <Avatar
            sx={{
              width: '122px',
              height: '122px',
              mx: { xs: 'auto', md: 0 },
            }}
            alt="Remy Sharp"
            src="images/avatar-profile.png"
          />

          <Box
            sx={{
              display: 'flex',

              flexDirection: 'column',
              justifyContent: 'space-between',

              width: 200,
              mx: { xs: 'auto', md: 0 },
            }}
          >
            <Typography variant="h5" sx={{ lineHeight: 1 }}>
              Camila Soares
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                mt: { xs: 1, md: 2 },
                mb: { xs: 1, md: 3 },

                lineHeight: 1,
              }}
            >
              {' '}
              Brasil
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleFormOpen}
            >
              Adicionar Projeto
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 7,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mb: 2,
            }}
          >
            Meus Projetos
          </Typography>

          <TextField
            id="tagsField"
            label="Buscar Tags"
            sx={{
              width: { xs: '100%', md: 513 },
              fontSize: '10px',
            }}
          />
        </Box>
      </Box>

      <Grid
        columnGap={3}
        rowGap={{ xs: '24px', md: 0 }}
        sx={{
          mx: { xs: 0, md: 4 },
          mt: 5,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignContent: 'center',
        }}
      >
        <BlankCard onClick={handleFormOpen} />
        <SkeletonCard />
        <SkeletonCard />
      </Grid>

      <FormDialog
        open={formOpen}
        onClose={handleFormClose}
        onClick={handleConfOpen}
        onClickDetails={handleDetailsOpen}
      />
      <ConfimationDialog
        open={confOpen}
        onClose={handleConfClose}
        onClick={handleConfClose}
      />

      <DetailsDialog open={detailsOpen} onClose={handleDetailsClose} />
    </>
  )
}

export default user
