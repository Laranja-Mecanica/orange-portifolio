import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false)

  const [portifolios, setPortifolios] = useState([{}])
  const [filtedPortifolios, setFiltedPortifolios] = useState(portifolios)

  const [portifolio, setPortifolio] = useState({
    id: 0,
    name: '',
    img: '',
    user: { name: '' },
    tags: [],
  })

  const handleFormOpen = () => {
    setPortifolio({
      id: 0,
      name: 'TESTE',
      img: 'portifolio3',
      date: '12/23',
      user: {
        name: 'Camila Soares',
        proPic: 'user3',
      },
      tags: ['UX', 'HTML'],
    })
  }

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        portifolio,
        setPortifolio,
        handleFormOpen,
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