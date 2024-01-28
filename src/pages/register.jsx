import { Header, PasswordInput } from '@/components'
import { useUser } from '@/hooks'
import { Box, Button, TextField, Typography } from '@mui/material'
import Image from 'next/image'

const register = () => {
  const { user, handleUserInputChange, createUser } = useUser()
  const { name, lastName, email, password } = user

  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Header />
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
          px: 3,
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
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
            }}
          >
            <TextField
              id="firstname"
              label="Nome"
              sx={{
                my: 2,
                width: { xs: '100%', md: '48%' },
                mb: 0,
              }}
              value={name}
              onChange={handleUserInputChange}
              required
              name="name"
            />
            <TextField
              id="lastname"
              label="Sobrenome"
              sx={{
                my: 2,
                width: { xs: '100%', md: '48%' },
                mb: 0,
              }}
              value={lastName}
              onChange={handleUserInputChange}
              required
              name="lastName"
            />
          </Box>
          <TextField
            id="email"
            label="Email address"
            sx={{ my: 2 }}
            value={email}
            onChange={handleUserInputChange}
            name="email"
          />
          <PasswordInput
            password={password}
            handlePassword={handleUserInputChange}
            required
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, mb: '18px' }}
            onClick={createUser}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </main>
  )
}

export default register
