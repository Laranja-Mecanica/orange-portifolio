import { DetailsDialog, Header, PortifolioCard } from '@/components'
import { useAppContext, useDialogContext } from '@/context'
import { usePortifolio } from '@/hooks'
import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { NextSeo } from 'next-seo'

const Home = () => {
  const { setDetailsOpen } = useDialogContext()
  const { setFiltedPortifolios, filtedPortifolios } = useAppContext()
  const { filterPortifoliosByTags, tags } = usePortifolio()

  const { setPortifolio } = useDialogContext()
  const handleOpen = (portifolio) => {
    setDetailsOpen(true)
    setPortifolio(portifolio)
  }

  return (
    <>
      <NextSeo title="Descubra novos projetos" />

      <main>
        <Box sx={{ mx: 2 }}>
          <Header />
          <Typography
            variant="h4"
            color="primary"
            sx={{
              width: { xs: 312, md: 744 },
              fontSize: { xs: 'h5.fontSize', md: 'h4.fontSize' },
              textAlign: 'center',
              margin: { xs: '128px auto 40px', md: '185px auto 120px' },
            }}
          >
            Junte-se à comunidade de inovação, inspiração e descobertas,
            transformando experiências em conexões inesquecíveis
          </Typography>

          <Stack spacing={3} sx={{ width: '100%' }}>
            <Autocomplete
              multiple
              id="tags-outlined"
              name="tags"
              options={tags}
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
                width: { xs: '100%', md: 723 },
              }}
            />
          </Stack>

          <Grid
            container
            columnSpacing={2}
            rowSpacing={{ xs: '20px', md: 5 }}
            sx={{
              mt: { xs: 4, md: 5 },
            }}
          >
            {filtedPortifolios.map((portifolio, i) => (
              <Grid
                item
                key={i}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2.4}
                onClick={() => handleOpen(portifolio)}
              >
                <PortifolioCard portifolio={portifolio} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <DetailsDialog />
      </main>
    </>
  )
}

export default Home
