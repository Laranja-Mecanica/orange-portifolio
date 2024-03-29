import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Autocomplete,
  Stack,
} from '@mui/material'
import {
  BlankCard,
  ConfimationDialog,
  DeleteDialog,
  DetailsDialog,
  FormDialog,
  Header,
  PortifolioCard,
  SkeletonCard,
} from '@/components'
import { useAppContext, useDialogContext } from '@/context'
import { usePortifolio } from '@/hooks'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

const User = () => {
  const { dispatch, setPortifolio, portifolio } = useDialogContext()
  const {
    user,
    filtedPortifolios,
    setUser,
    setFiltedPortifolios,
    portifolios,
    stringAvatar,
  } = useAppContext()

  const { getPortifoliosByUser, optionsTags, filterPortifoliosByTags } =
    usePortifolio()
  const { id, name, lastName } = user

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(JSON.parse(window.sessionStorage.getItem('user')))
    }
  }, [])

  useEffect(() => {
    getPortifoliosByUser(id)
  }, [user])

  const handleFormOpen = () => {
    dispatch({ type: 'form' })
    setPortifolio({
      portfolioId: null,
      title: '',
      description: '',
      link: '',
      user: {
        name,
        lastName,
      },
      tags: [],
    })
  }
  return (
    <>
      <NextSeo title="Meu perfil" noindex={true} nofollow={true} />

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
            alt={`${name} ${lastName}`}
            {...stringAvatar(`${name} ${lastName}`)}
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
              /* onClick={handleFormOpen} */
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

          {/* <TextField
            id="tagsField"
            label="Buscar Tags"
            sx={{
              width: { xs: '100%', md: 513 },
              fontSize: '10px',
            }}
          /> */}
          <Stack spacing={3} sx={{ width: '100%' }}>
            <Autocomplete
              multiple
              id="tags-outlined"
              name="tags"
              options={optionsTags}
              getOptionLabel={(option) => option}
              filterSelectedOptions
              fullWidth
              onChange={(_, tags) =>
                setFiltedPortifolios(filterPortifoliosByTags(tags))
              }
              renderInput={(params) => (
                <TextField {...params} label="Tags" fullWidth />
              )}
              sx={{
                width: { xs: '100%', md: 513 },
              }}
            />
          </Stack>
        </Box>
      </Box>

      <Grid
        container
        columnSpacing={2}
        rowGap={{ xs: '24px', md: 5 }}
        sx={{
          px: { xs: 1, md: 4 },
          mt: { xs: 4, md: 5 },
          display: 'flex',
        }}
      >
        {portifolios.length === 0 ? (
          <>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                width: '50%',
              }}
            >
              <BlankCard onClick={handleFormOpen} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkeletonCard />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{
                display: { xs: 'none', md: 'inline-block' },
              }}
            >
              <SkeletonCard />
            </Grid>
          </>
        ) : (
          filtedPortifolios.map((portifolio, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
              <PortifolioCard
                portifolio={{
                  ...portifolio,
                  user: { name, lastName },
                }}
              />
            </Grid>
          ))
        )}
      </Grid>

      <FormDialog />
      <ConfimationDialog />
      <DetailsDialog />
      <DeleteDialog />
    </>
  )
}

export default User
