import { api } from '@/lib/axios'

const useUser = () => {
  const createUser = async (user) => {
    try {
      console.log(user)
      const response = await api.post('/register', user)

      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    createUser,
  }
}

export default useUser
