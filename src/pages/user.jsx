import { Header } from '@/components'
import React from 'react'
import {Box, Avatar, Typography, Button} from '@mui/material'


const user = () => {
  return (
    <>
      <Header />
      <main>

      <Box sx={{
        mt: "185px", 
        mx: "auto",
        display: "flex", 
        flexDirection: {xs: "column", md: "row"},
        gap: {xs:2, md:"42px"},
        width: 364
        
        }}>

        <Avatar 
        sx={{
          width: "122px",
          height:"122px",
          mx: {xs: "auto", md:0}

        
        }}
        alt="Remy Sharp" 
        src="images/avatar-profile.png" />

        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          width:200,
          mx: {xs: "auto", md:0}
          }}>
          
        
        <Typography variant="h5" sx={{lineHeight:1}} >Camila Soares</Typography>
        
        <Typography variant="subtitle1"

        sx={{
        mt:{xs:1, md: 2}, 
        mb:{xs:1, md: 3}, 
       
        lineHeight: 1
        
        }}> Brasil</Typography>
       
        <Button variant="contained" disabled> 
        Adicionar Projeto       
        </Button>

        </Box>
        

      </Box>

      </main>

    </>
  )
}

export default user