import { useAppContext } from '@/context'
import { api } from '@/lib/axios'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useUser = () => {
  const [error, setError] = useState(false)
  const [msgError, setMsgError] = useState('Login ou senha inválidos')

  const setToken = (token) => {
    window.sessionStorage.setItem('token', token)
  }

  const saveUser = (user) => {
    window.sessionStorage.setItem('user', user)
  }

  const router = useRouter()

  const { setIsRegistrationSuccess } = useAppContext()
  const createUser = async (user) => {
    api
      .post('/register', user)
      .then((res) => {
        console.log(res.data.message)

        setIsRegistrationSuccess(true)
      })
      .then(() => {
        setTimeout(() => {
          router.push('/')
          setIsRegistrationSuccess(false)
        }, 2000)
      })
      .catch((error) => console.error(error.message))
  }

  const loginUser = async (user) => {
    api
      .post('/session', user)
      .then((res) => {
        const token = res.data.accessToken
        const id = jwt.decode(token).sub
        setToken(token)
        getUser(id)
      })
      .catch((_) => {
        setError(true)
      })
  }

  const loginWithGoogle = async () => {
    api
      .get('/auth/google')
      .then((res) => console.log('ok'))
      .catch(() => console.log('bad'))
  }

  const getUser = async (id) => {
    const token = window.sessionStorage.getItem('token')
    api
      .get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        saveUser(JSON.stringify({ id, ...res.data.user }))
        router.push('/user')
      })
      .catch((error) => console.log(error))
  }

  const logout = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('user', null)
      window.sessionStorage.setItem('token', null)
    }
    router.push('/')
  }

  return {
    createUser,
    loginUser,
    loginWithGoogle,
    logout,
    error,
    setError,
    msgError,
  }
}

export default useUser
