import { useAppContext } from '@/context'
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
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator'

const Register = () => {
  const { createUser } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    createUser({ ...data, country: 'Brasil' })
  }

  const [showPassword, setShowPassword] = useState(false)
  const { isRegistrationSuccess } = useAppContext()

  const handleClickShowPassword = () => setShowPassword((show) => !show)


  const [hasUpperCase, setUpperCase] = useState(false)
  const [hasLowerCase, setLowerCase] = useState(false)
  const [hasNumber, setNumber] = useState(false)
  const [hasSpecialCaracter, setSpecialCaracter] = useState(false)

  return (
    <>
      <NextSeo title="Criar conta" noindex={true} nofollow={true} />

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
                helperText={errors?.name?.type === "required" ? 'Digite o primeiro nome' :
                  errors?.name?.type === "maxLength" ? 'Esse campo pode ter até 25 caracteres' : ''
                }
                {...register('name', { required: true, maxLength: 25 })}
              />
              <TextField
                id="lastName"
                label="Sobrenome"
                sx={{
                  my: 2,
                  width: { xs: '100%', md: '48%' },
                  mb: 0,
                }}
                error={Boolean(errors?.lastName)}
                helperText={errors?.lastName?.type === "required" ? 'Digite o sobrenome' :
                  errors?.lastName?.type === "maxLength" ? 'Esse campo pode ter até 25 caracteres' : ''
                }
                {...register('lastName', { required: true, maxLength: 25 })}
              />
            </Box>
            <TextField
              id="email"
              label="Email address"
              sx={{ my: 2 }}
              error={Boolean(errors?.email)}
              helperText={errors?.email ? 'Digite o email' : ''}
              {...register('email', { required: true, validate: value => validator.isEmail(value) })}
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
              helperText={errors?.password?.type === 'required' ? 'Digite o senha' :
                errors?.password?.type === 'minLength' ? 'A senha tem que no mínimo 6 caracteres' :
                  errors?.password?.type === 'maxLength' ? 'A senha pode ter no máximo 25 caracteres' : (
                    <>
                      Deve conter:<br />
                      {!hasUpperCase && <>- Uma letra maiúscula<br /></>}
                      {!hasLowerCase && <>- Uma letra minúscula<br /></>}
                      {!hasNumber && <>- Um número<br /></>}
                      {!hasSpecialCaracter && <>- Um caracter especial (!*@&$%)</>}
                    </>
                  )
              }
              error={Boolean(errors?.password)}
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 25,
                validate: value => setLowerCase(/a-z/.test(value))

              })}
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
    </>
  )
}

export default Register
