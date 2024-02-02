import {
  ConfimationDialog,
  DeleteDialog,
  DetailsDialog,
  FormDialog,
  Header,
  PortifolioCard,
} from '@/components'
import { useAppContext, useDialogContext } from '@/context'
import { usePortifolio } from '@/hooks'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const User = () => {
  const { setPortifolio, portifolio, handleFormOpen } = useDialogContext()
  const { user } = useAppContext()
  const { id, name, lastName } = user

  const [hasPortifolio, setHasPortifolio] = useState(true)


  const { getPortifoliosByUser } = usePortifolio()

  getPortifoliosByUser(id)
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
              {`${name} ${lastName}`}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                mt: { xs: 1, md: 2 },
                mb: { xs: 1, md: 3 },
                lineHeight: 1,
              }}
            >
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
        <Grid container columnSpacing={2} rowSpacing={{ xs: '20px', md: 5 }}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <PortifolioCard portifolio={portifolio} />
          </Grid>
        </Grid>
        {/* <BlankCard onClick={handleFormOpen} />
        <SkeletonCard />
        <SkeletonCard /> */}
      </Grid>

      <FormDialog />
      <ConfimationDialog />
      <DetailsDialog />
      <DeleteDialog />
    </>
  )
}

export default User
