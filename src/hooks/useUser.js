import axios from 'axios'

const useUser = () => {
  const BASE_URL = 'https://orange-app-2m9ib.ondigitalocean.app'

  /*  const [user, setUser] = useState({
     name: '',
     lastName: '',
     email: '',
     password: '',
   })
 
   const handleUserInputChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value })
   } */

  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }

  const createUser = async (user) => {
    axios
      .post(`${BASE_URL}/register`, user, options)
      .then((res) => console.log(res.data.message))
    // .catch((err) => console.log('Deu ruim'))
  }

  return {
    /*  user,
     handleUserInputChange, */
    createUser,
  }
}

export default useUser
