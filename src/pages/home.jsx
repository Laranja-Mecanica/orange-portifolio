import React, { useState } from 'react'
import { Typography, TextField, Box, Grid } from '@mui/material'
import { DetailsDialog, Header, PortifolioCard } from '@/components'
import { useAppContext } from '@/context/appContext'

const home = () => {
  const { setDetailsOpen } = useAppContext()

  const portifolios = [
    {
      id: 1,
      name: 'Portifolio 1',
      img: 'portifolio1',
      date: '02/24',
      user: {
        proPic: 'user1',
        name: 'Bianca Martins',
      },
      tags: ['UX', 'Web'],
    },
    {
      id: 2,
      name: 'Portifolio 2',
      img: 'portifolio2',
      date: '12/23',
      user: {
        proPic: 'user2',
        name: 'Enzo Gabriel',
      },
      tags: ['UX/UI', 'Web'],
    },
    {
      id: 3,
      name: 'Portifolio 3',
      img: 'portifolio3',
      date: '12/23',
      user: {
        proPic: 'user3',
        name: 'Alice Alexandra',
      },
      tags: ['UX', 'Java'],
    },
    {
      id: 4,
      name: 'Portifolio 4',
      img: 'portifolio4',
      date: '12/23',
      user: {
        proPic: 'user4',
        name: 'Carolina Valentim',
      },
      tags: ['UI', 'JS'],
    },
  ]

  const { setPortifolio } = useAppContext()
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

        <TextField
          id="tagsField"
          label="Buscar Tags"
          sx={{
            width: { xs: '100%', md: 723 },
            mb: { xs: 4, md: 5 },
          }}
        />

        <Grid container columnSpacing={2} rowSpacing={{ xs: '20px', md: 5 }}>
          {portifolios.map((portifolio, i) => (
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
