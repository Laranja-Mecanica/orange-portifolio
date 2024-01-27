import React, { useState } from 'react'
import { Typography, TextField, Box, Grid } from '@mui/material'
import { DetailsDialog, Header, PortifolioCard } from '@/components'
import { useAppContext } from '@/context/appContext'

const home = () => {
  const portifolios = [
    {
      name: 'Portifolio 1',
      img: 'portifolio1',
      date: '02/24',
      user: {
        proPic: 'user1',
        name: 'Bianca Martins'
      },
      tags: [
        'UX',
        'Web'
      ]
    },
    {
      name: 'Portifolio 2',
      img: 'portifolio2',
      date: '12/23',
      user: {
        proPic: 'user2',
        name: 'Enzo Gabriel'
      },
      tags: [
        'UX/UI',
        'Web'
      ]
    },
    {
      name: 'Portifolio 3',
      img: 'portifolio3',
      date: '12/23',
      user: {
        proPic: 'user3',
        name: 'Alice Alexandra'
      },
      tags: [
        'UX',
        'Java'
      ]
    },
    {
      name: 'Portifolio 4',
      img: 'portifolio4',
      date: '12/23',
      user: {
        proPic: 'user4',
        name: 'Carolina Valentim'
      },
      tags: [
        'UI',
        'JS',
        'HTML'
      ]
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const { setPortifolio } = useAppContext()
  const handleOpen = portifolio => {
    setIsOpen(true)
    setPortifolio(portifolio)
  }

  const handleClose = () => {
    setIsOpen(false)

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
            margin: { xs: '128px auto 40px', md: '185px auto 120px' }
          }}
        >
          Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
        </Typography>

        <TextField
          id="tagsField"
          label="Buscar Tags"
          sx={{
            width: { xs: '100%', md: 723 },
            mb: { xs: 4, md: 5 }
          }}
        />


        <Grid
          container
          columnGap={3}
          rowGap={{ xs: '20px', md: 5 }}
        >
          {portifolios.map((portifolio, i) => (
            <Grid
              key={i}
              item
              onClick={() => handleOpen(portifolio)}
            >
              <PortifolioCard portifolio={portifolio} />
            </Grid>
          ))}
        </Grid>

      </Box>


      <DetailsDialog
        open={isOpen}
        onClose={handleClose}
      />
    </main >
  )
}

export default home