import { useAppContext } from '@/context'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

const useUser = () => {
  const setToken = (token) => {
    window.sessionStorage.setItem('token', token)
  }

  let token
  if (typeof window !== 'undefined') {
    token = window.sessionStorage.getItem('token')
  }

  const saveUser = (user) => {
    window.sessionStorage.setItem('user', user)
  }

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const router = useRouter()

  const { setIsRegistrationSuccess } = useAppContext()
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
    api.post('/session', user)
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
    api.get(`/users/${id}`, options)
      .then((res) => {
        saveUser(JSON.stringify({ id, ...res.data.user }))
        router.push('/user')
      })
      .catch((error) => console.log(error.data))
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
    logout
  }
}

export default useUser