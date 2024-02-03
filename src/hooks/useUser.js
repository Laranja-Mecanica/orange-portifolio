import { useAppContext } from '@/context'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import { useEffect } from 'react'



const useUser = () => {
  const setToken = (token) => {
    window.sessionStorage.setItem('token', token)
  }

  let token
  if (typeof window !== 'undefined') {
    token = window.sessionStorage.getItem('token')
  }

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*'
    }
  }
  const router = useRouter()

  const { setUser, setIsRegistrationSuccess } = useAppContext()
  const createUser = async (user) => {

    api.post('/register', user)
      .then(res => {
        console.log(res.data.message)
        setIsRegistrationSuccess(true)
      })
      .then(() => {
        setTimeout(() => {
          router.push('/')
        }, 2000)
      })
      .catch(error => console.error(error.message))

  }

  const loginUser = async (user) => {
    api.post('/session')
      .then((res) => {
        const token = res.data.accessToken
        const id = jwt.decode(token).sub
        setToken(token)
        getUser(id)
      })
      .catch(error => console.error(error.message))
  }

  const loginWithGoogle = async () => {
    api.get('/auth/google')
      .then(res => console.log('ok'))
      .catch(() => console.log('bad'))
  }

  const getUser = async (id) => {
    api.get(`/users/${id}`)
      .then((res) => {
        setUser({ id, ...res.data.user })
        router.push('/user')
      })
      .catch((error) => console.log(error.data))
  }

  return {
    createUser,
    loginUser,
    loginWithGoogle
  }
}

export default useUser