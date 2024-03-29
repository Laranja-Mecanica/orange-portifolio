import { GoogleIcon } from '@/components'
import { useUser } from '@/hooks'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Alert,
} from '@mui/material'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'

export default function Home() {
  const { loginUser, loginWithGoogle, msgError, error, setError } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    loginUser(data)
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  useEffect(() => {
    setError(false)
  }, [])

  return (
    <>
      <NextSeo title="Login" noindex={true} nofollow={true} />
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
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
            width: 550,
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
              Entre no Orange Portfólio
            </Typography>

            <Button
              sx={{
                textTransform: 'none',
                my: 4,
                boxShadow: '0px 1px 5px 0px #00000030',
                color: '#00000054',
              }}
              onClick={loginWithGoogle}
            >
              <GoogleIcon />
              <Typography
                variant="body1"
                sx={{
                  ml: 3,
                  fontWeight: 700,
                }}
              >
                Entrar com Google
              </Typography>
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'neutral.110',
                fontSize: { xs: '16px', sm: '20px', md: '24px' },
                textAlign: 'start',
              }}
            >
              Faça login com email
            </Typography>
            <TextField
              id="email"
              label="Email address"
              sx={{ my: 2 }}
              error={Boolean(errors?.email)}
              helperText={errors?.email ? 'Digite o email' : ''}
              {...register('email', {
                required: true,
                validate: (value) => validator.isEmail(value),
              })}
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
            {error && (
              <Alert
                variant="filled"
                severity="error"
                sx={{
                  mt: 2,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {msgError}
              </Alert>
            )}
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2, mb: '18px' }}
              onClick={() => handleSubmit(onSubmit)()}
            >
              Entrar
            </Button>
            <Link href={'/register'} style={{ textDecoration: 'none' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: 'neutral.100',
                  textDecoration: 'none',
                  textAlign: 'start',
                }}
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </main>
    </>
  )
}
