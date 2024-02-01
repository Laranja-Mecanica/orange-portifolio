import React, { useState } from 'react'
import {
  Typography,
  TextField,
  Box,
  Grid,
  Stack,
  Autocomplete
} from '@mui/material'
import { DetailsDialog, Header, PortifolioCard } from '@/components'
import { useDialogContext, useAppContext } from '@/context'
import { usePortifolio } from '@/hooks'

const home = () => {
  const { setDetailsOpen } = useDialogContext()
  const { setFiltedPortifolios, filtedPortifolios } = useAppContext()
  const { filterPortifoliosByTags, tags } = usePortifolio()

  const { setPortifolio } = useDialogContext()
  const handleOpen = (portifolio) => {
    setDetailsOpen(true)
    setPortifolio(portifolio)
  }

  return (
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
            name='tags'
            options={tags}
            getOptionLabel={(option) => option}
            filterSelectedOptions
            fullWidth
            onChange={(_, tags) => setFiltedPortifolios(filterPortifoliosByTags(tags))}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tags"
                fullWidth

              />
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
              xs={12} sm={6} md={4} lg={3} xl={2.4}
              onClick={() => handleOpen(portifolio)}>
              <PortifolioCard portifolio={portifolio} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <DetailsDialog />
    </main>
  )
}

export default home
