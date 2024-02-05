import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Snackbar
} from '@mui/material'
import Link from 'next/link'

import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useUser } from '@/hooks'
import { useAppContext } from '@/context'
import { useRouter } from 'next/router'


const Header = () => {
  const router = useRouter()
  const { stringAvatar, user } = useAppContext()

  const { name, lastName } = user

  const { logout } = useUser()
  const pages = [
    {
      name: 'Meus projetos',
      link: '/user',
    },
    {
      name: 'Descobrir',
      link: '/home',
    },
  ]

  const [anchorEl, setAnchorEl] = useState()

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const [toast, setToast] = useState(false)

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          keepMounted
          sx={{
            mt: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          {pages.map(({ name, link }, i) => (
            <MenuItem
              key={i}
              sx={{
                bgcolor: router.pathname === link ? 'secondary.light' : ''
              }}
              onClick={() => {
                if (router.pathname === link) {
                  setToast(true)
                } else {
                  router.push(link)
                }
              }}
            >
              {name}
            </MenuItem>
          ))}
          <Divider />
          <MenuItem>Configurações</MenuItem>
          <MenuItem
            onClick={logout}
          >
            Logout
          </MenuItem>
        </Menu>

        <Box
          sx={{
            flexGrow: { xs: 1, md: 0 },
          }}
        >
          <Image
            src={'icon/logo-orange.svg'}
            width={111}
            height={41}
            alt="Logo da orange portifólio dos futuros contratantes"
          />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexGrow: 1,
            ml: '100px',
          }}
        >
          {pages.map(({ name, link }, i) => (
            <MenuItem key={i}>
              <Link
                href={link}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '20px',
                }}
              >
                {name}
              </Link>
            </MenuItem>
          ))}
          <MenuItem
            onClick={logout}
            style={{
              textDecoration: 'none',
              color: 'white',
              fontWeight: 500,
              fontSize: '20px',
            }}
          >
            Logout
          </MenuItem>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt={`${name} ${lastName}`}
              {...stringAvatar(`${name} ${lastName}`)}
            />
          </IconButton>

          <IconButton size="large" color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Snackbar
        sx={{
          width: 'fit-content'
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={toast}
        autoHideDuration={3000}
        onClose={() => setToast(false)}
        message="Você já está nessa página"
      />
    </AppBar>
  )
}

export default Header
