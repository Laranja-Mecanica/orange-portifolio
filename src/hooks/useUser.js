import { useAppContext } from '@/context'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

const setToken = token => {
  window.sessionStorage.setItem('token', token)
}

const useUser = () => {

  const router = useRouter()
  const { setUser } = useAppContext()
  const createUser = async (user) => {
    api.post('/register', user)
      .then(res => console.log(res.data.message))
      .catch(error => console.error(error.message))
  }

  const loginUser = async (user) => {
    api.post('/session', user)
      .then(res => {
        const token = res.data.accessToken
        const id = jwt.decode(token).sub
        getUser(id)
      })
      .then(() => router.push('/user'))
      .catch(error => console.error(error.message))
  }

  const getUser = async (id) => {
    api.get(`/users/${id}`)
      .then(res => {
        setUser({ id: id, ...res.data.user })
      })
      .catch(error => console.log(error.data))
  }

  return {
    createUser,
    loginUser,
  }
}

export default useUser
