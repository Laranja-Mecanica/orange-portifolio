import { useAppContext } from '@/context'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

const setToken = (token) => {
  window.sessionStorage.setItem('token', token)
}

const useUser = () => {
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
    api
      .post('/session', user)
      .then((res) => {
        const token = res.data.accessToken
        const id = jwt.decode(token).sub
        setToken(token)
        getUser(id)
      })
      .catch(error => console.error(error.message))

  }

  const getUser = async (id) => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser({ id, ...res.data.user })
      })
      .catch((error) => console.log(error.data))
  }

  return {
    createUser,
    loginUser,
  }
}

export default useUser
