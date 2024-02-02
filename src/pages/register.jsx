import { Header } from '@/components'
import { useUser } from '@/hooks'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
  const { createUser } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    createUser(data)
  }

  const [showPassword, setShowPassword] = useState(false)
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

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
          {isRegistrationSuccess && (
            <Alert
              variant="filled"
              severity="success"
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: { xs: 'auto', md: 'fit-content' },
                mx: 'auto',
                mb: { xs: '56px', md: '76px' },
              }}
            >
              Cadastro feito com sucesso
            </Alert>
          )}

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
              error={Boolean(errors?.name)}
              helperText={errors?.name ? 'Digite o primeiro nome' : ''}
              {...register('name', { required: true })}
            />
            <TextField
              id="lastname"
              label="Sobrenome"
              sx={{
                my: 2,
                width: { xs: '100%', md: '48%' },
                mb: 0,
              }}
              error={Boolean(errors?.lastname)}
              helperText={errors?.lastname ? 'Digite o sobrenome' : ''}
              {...register('lastname', { required: true })}
            />
          </Box>
          <TextField
            id="email"
            label="Email address"
            sx={{ my: 2 }}
            error={Boolean(errors?.email)}
            helperText={errors?.email ? 'Digite o email' : ''}
            {...register('email', { required: true })}
          />

          <TextField
            type={showPassword ? 'text' : 'password'}
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText={errors?.password ? 'Digite o senha' : ''}
            error={Boolean(errors?.password)}
            {...register('password', { required: true })}
          />

          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2, mb: '18px' }}
            onClick={() => handleSubmit(onSubmit)()}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </main>
  )
}

export default Register
