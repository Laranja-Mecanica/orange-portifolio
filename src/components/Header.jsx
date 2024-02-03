import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import Link from 'next/link'

import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
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
            <MenuItem key={i}>
              <Link
                variant="h6"
                href={link}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                {name}
              </Link>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem>Configurações</MenuItem>
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
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Camila Soares" src="images/Circle.png" />
          </IconButton>

          <IconButton size="large" color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
