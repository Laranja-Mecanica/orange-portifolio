import React from 'react'
import { Box, Card, CardMedia, Typography, Avatar, Chip } from '@mui/material'
import { CardButton } from '@/components'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useAppContext } from '@/context'

const PortifolioCard = ({ portifolio }) => {
  const router = useRouter()
  const { thumbUrl, date, userName, lastName, tags } = portifolio
  const { stringAvatar } = useAppContext()

  return (
    <Card
      elevation={0}
      sx={{
        minWidth: 312,
        width: '100%',
        height: 298,
      }}
    >
      {router.pathname === '/user' && <CardButton portifolio={portifolio} />}
      <CardMedia
        component="img"
        title=""
        height={258}
        image={thumbUrl}
        alt='Fail'
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
              fontSize: 12
            }}
            {...stringAvatar(`${'A'} ${'B'}`)}
          /* src={`/images/${user.proPic}.png`} */
          />

          <Typography variant="subtitle1">
            {`${userName} ${lastName}`} - {/* {date} */}
          </Typography>
        </Box>
        <Box
          id="tags"
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          {tags?.map((tag, i) => (
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
