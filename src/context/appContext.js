import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false)

  const [portifolios, setPortifolios] = useState([{}])
  const [filtedPortifolios, setFiltedPortifolios] = useState(portifolios)

  useEffect(() => {
    setFiltedPortifolios(portifolios)
  }, [portifolios])

  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  return (
    <AppContext.Provider
      value={{
        stringAvatar,
        user,
        setUser,
        portifolios,
        setPortifolios,
        filtedPortifolios,
        setFiltedPortifolios,
        isRegistrationSuccess,
        setIsRegistrationSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
