import {
  Box,
  Card,
  CardMedia,
  Typography,
  Avatar,
  Chip
} from '@mui/material'
import React from 'react'

const PortifolioCard = ({ portifolio }) => {
  const { img, date, user, tags } = portifolio
  return (
    <Card
      elevation={0}
      sx={{
        width: { xs: "100%", md: "100%" },
        height: 298
      }}
    >
      <CardMedia
        component='img'
        title=""
        image={`/images/${img}.png`}
        sx={{
          height: 258,
          width: 389
        }}
      />

      <Box
        sx={{
          margin: 0,
          pt: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box
          id='info'
          sx={{
            display: 'flex',
            gap: 1,
            px: 0,
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              width: 24,
              height: 24
            }}
            src={`/images/${user.proPic}.png`}
          />

          <Typography variant="subtitle1" >
            {user.name} - {date}
          </Typography>
        </Box>
        <Box
          id='tags'
          sx={{
            display: 'flex',
            gap: 1
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