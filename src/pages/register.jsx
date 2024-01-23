import React from 'react'
import {
  Box,
  Typography,
  Button,
  TextField
} from '@mui/material'
import Image from 'next/image'
import { useState } from "react";
import { PasswordInput } from "@/components";

const register = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Image
          src={'images/img_cadastro.svg'}
          width={525}
          height={832}
          loading="lazy"
          alt="Imagem de cadastro"
        />
      </Box>

      <Box
        sx={{
          width: 517,
          mx: 'auto',
          textAlign: 'center',
          height: { xs: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 3
        }}
      >
        <Box>
          <Typography
            variant="h3"
            color="primary"
            sx={{ fontSize: { xs: '24px', sm: '34px', md: '48px' } }}
          >
            Cadastre-se
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between'
            }}
          >
            <TextField
              id="firstname"
              label="Nome"
              sx={{
                my: 2,
                width: { xs: '100%', md: '48%' },
                mb: 0
              }}
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              required
            />
            <TextField
              id="lastname"
              label="Sobrenome"
              sx={{
                my: 2,
                width: { xs: '100%', md: '48%' },
                mb: 0
              }}
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              required
            />
          </Box>
          <TextField
            id="email"
            label="Email address"
            sx={{ my: 2 }}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordInput
            password={password}
            handlePassword={e => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, mb: '18px' }}
          >
            Cadastrar
          </Button>
        </Box>

      </Box>
    </main>
  )
}

export default register