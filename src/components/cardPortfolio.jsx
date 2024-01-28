import EditIcon from '@mui/icons-material/Edit'
import { Box, Button, Card, CardActions, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import Image from 'next/image'
import { useState } from 'react'


const props = {
    name: string
}



export const CardComponent = props => {

  const [anchorEdit, setAnchorEdit] = useState<null | HTMLElement>(null)
  const options = ['Editar', 'Excluir']

  const handleOpenMenu = (event) => {
    setAnchorEdit(event.currentTarget)
  }

  const handleCloseMenu = (event) => {
    setAnchorEdit(null)
  }

  return (
    <Card sx={{
        maxWidth: 389, 
        width: '100%'
        }} elevation={0}>
        <Box 
        sx={{
            position: 'relative', 
            height: 258
            }}>
            <Image 
            src='/assets/card-img.png' 
            width={389} 
            height={258} 
            alt='project image'/>
            <IconButton 
            onClick={handleOpenMenu}
            sx={{
                position:'absolute', 
                top: 17, 
                right: 17, 
                width: 28, 
                height: 28, 
                bgcolor: 'secondary.main', 
                "&:hover": { bgcolor: 'secondary.dark'}
                }} >
                    <EditIcon 
                    sx={{
                    fontSize:24
                    }}/>
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
                    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        py: 1,
                        gap: 1
                        }}>
                        {
                            options.map((option, i) => (
                                <MenuItem key={i} onClick={handleCloseMenu} sx={{width: 208, "&:hover": {bgcolor: 'secondary.light'}}}>
                                    <Typography textAlign="center">{option}</Typography>
                                </MenuItem>
                            ))
                        }
                    </Box>
              
            </Menu>

        </Box>
        <CardActions>
            <h1></h1>
            <Button 
            variant="contained" 
            color="primary">OK
            </Button>
        </CardActions>
    </Card>
  )
}