import { useDialogContext } from '@/context'
import EditIcon from '@mui/icons-material/Edit'
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { useState } from 'react'

export const CardButton = () => {
  const { menuOptions } = useDialogContext()
  const [anchorEdit, setAnchorEdit] = useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEdit(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEdit(null)
  }

  const handleOpenDialog = (_, openModal) => {
    setAnchorEdit(null)
    openModal()
  }

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <IconButton
        onClick={handleOpenMenu}
        sx={{
          position: 'absolute',
          top: 17,
          right: 17,
          width: 28,
          height: 28,
          bgcolor: 'secondary.main',
          '&:hover': { bgcolor: 'secondary.dark' },
        }}
      >
        <EditIcon
          sx={{
            fontSize: 24,
          }}
        />
      </IconButton>
      <Menu
        sx={{
          mt: '45px',
          display: 'flex',
        }}
        id="menu-appbar"
        anchorEl={anchorEdit}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEdit)}
        onClose={handleCloseMenu}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            py: 1,
            gap: 1,
          }}
        >
          {menuOptions.map(({ text, openModal }, i) => (
            <MenuItem
              key={i}
              onClick={e => handleOpenDialog(e, openModal)}
              sx={{ width: 208, '&:hover': { bgcolor: 'secondary.light' } }}
            >
              <Typography textAlign="center">
                {text}
              </Typography>
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  )
}
