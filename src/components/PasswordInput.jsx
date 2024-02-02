import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const PasswordInput = ({ password, handlePassword }) => {
  const [showPassword, setShowPassword] = useState(false)

  /*  const handleClickShowPassword = ({ password, handlePassword }) => {
     setShowPassword(!showPassword)
   } */


  return (
    <TextField
      id="password"
      label="Password"
      value={password}
      onChange={handlePassword}
      type={showPassword ? 'text' : 'password'}
      name="password"
      validation
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
    />
  )
}

export default PasswordInput
