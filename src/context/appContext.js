import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  let userSession

  const [user, setUser] = useState({})

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false)

  const [portifolios, setPortifolios] = useState([{}])
  const [filtedPortifolios, setFiltedPortifolios] = useState(portifolios)


  useEffect(() => {
    setFiltedPortifolios(portifolios)
  }, [portifolios])

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        portifolios,
        setPortifolios,
        filtedPortifolios,
        setFiltedPortifolios,
        isRegistrationSuccess,
        setIsRegistrationSuccess
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)