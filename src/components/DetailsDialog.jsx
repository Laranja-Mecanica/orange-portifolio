import React from 'react'
import { Dialog, Typography, Box, Avatar, Chip } from '@mui/material'

import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { useDialogContext } from '@/context'

const DetailsDialog = () => {
  const router = useRouter()
  const {
    portifolio,
    state,
    dispatch
  } = useDialogContext()
  const { title, user, description, tags, thumbUrl, link } = portifolio
  const { name, lastName } = user

  return (
    <Dialog
      open={state.detailsOpen}
      onClose={
        router.pathname === '/user'
          ? () => dispatch({ type: 'form' })
          : () => dispatch({ type: 'cancel' })
      }
      fullWidth={true}
      maxWidth={'lg'}
    >
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
          <Typography variant="h5">{title}</Typography>
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
              /* src={`/images/${user.proPic}.png`} */
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { md: 'column' },
                  gap: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {`${name} ${lastName}`}
                </Typography>
                <Typography variant="subtitle1">{/* date */}</Typography>
              </Box>
            </Box>

            <Typography
              variant="h5"
              sx={{
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {title}
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
              src={thumbUrl}
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
              mt: { xs: 2, md: 0 },
            }}
          >
            {description}
          </Typography>
          <Typography variant="body1">Download</Typography>
          <Link href={'/home'} style={{ textDecoration: 'none' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'info.80',
              }}
            >
              {link}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Dialog>
  )
}

export default DetailsDialog
