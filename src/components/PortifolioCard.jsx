import React from 'react'
import { Box, Card, CardMedia, Typography, Avatar, Chip } from '@mui/material'
import { CardButton } from '@/components'
import { useRouter } from 'next/router'

const PortifolioCard = ({ portifolio }) => {
  const router = useRouter()
  /* const { img, date, user, tags } = portifolio */
  const tags = []
  return (
    <Card
      elevation={0}
      sx={{
        minWidth: 312,
        width: '100%',
        height: 298,
      }}
    >
      {router.pathname === '/user' && <CardButton />}
      <CardMedia
        component="img"
        title=""
        /* image={`/images/${img}.png`} */
        sx={{
          height: 258,
          width: '100%',
        }}
      />

      <Box
        sx={{
          margin: 0,
          pt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          id="info"
          sx={{
            display: 'flex',
            gap: 1,
            px: 0,
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 24,
              height: 24,
            }}
          /*  src={`/images/${user.proPic}.png`} */
          />

          <Typography variant="subtitle1">
            {/* {user.name} - {date} */}
          </Typography>
        </Box>
        <Box
          id="tags"
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          {tags.map((tag, i) => (
            <Chip
              key={i}
              label={tag}
              sx={{
                fontSize: '13px',
                fontWeight: 600,
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  )
}

export default PortifolioCard
