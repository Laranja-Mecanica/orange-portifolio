import React from 'react'
import { Button, Dialog, Typography, Box, Avatar, Chip } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'

import { useAppContext } from '@/context/appContext'

const DetailsDialog = ({ open, onClick, onClose }) => {
  const { portifolio } = useAppContext()
  const { name, user, date, tags, img } = portifolio
  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth={'lg'}>
      <Box
        sx={{
          px: { xs: 2, md: '102px' },
          pb: '142px',
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            my: 2,
          }}
        >
          <Typography variant="h5">{name}</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'column' },
          }}
        >
          <Box
            id="portifolio-info"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: { xs: 0, md: 7 },
              mb: { xs: 0, md: 4 },
            }}
          >
            <Box
              id="user-info"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 24, md: 40 },
                  height: { xs: 24, md: 40 },
                }}
                src={`/images/${user.proPic}.png`}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { md: 'column' },
                  gap: 1
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {user.name}
                </Typography>
                <Typography variant="subtitle1">
                  {date}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h5"
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {name}
            </Typography>

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

          <Box
            id="img"
            sx={{
              width: '100%',
              height: 'fit-content',
              mb: { xs: '10px', md: 8 },
            }}
          >
            <Image
              src={`/images/${img}.png`}
              style={{ width: '100%', height: 'auto' }}
              width={838}
              height={586}
              alt="Imagem do portifólio"
            />
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              mt: { xs: 2, md: 0 }
            }}
          >
            Temos o prazer de compartilhar com vocês uma variação da nosso
            primeiro recurso gratuito, Monoceros. É um modelo de uma página para
            mostrar seus produtos. Tentamos redesenhar uma versão mais B2C e
            minimalista do nosso primeiro template de e-commerce.
          </Typography>
          <Typography variant="body1">Download</Typography>
          <Link href={'/home'} style={{ textDecoration: 'none' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'info.80',
              }}
            >
              https://gumroad.com/products/wxCSL
            </Typography>
          </Link>
        </Box>
      </Box>
    </Dialog>
  )
}

export default DetailsDialog
