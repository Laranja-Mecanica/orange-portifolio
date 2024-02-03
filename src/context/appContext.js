import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const [userPortifolios, setUserPortifolios] = useState([{}])

  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false)

  const [portifolio, setPortifolio] = useState({
    id: 0,
    name: '',
    img: '',
    user: { name: '' },
    tags: [],
  })

  const portifolios = [
    {
      id: 1,
      name: 'Portifolio 1',
      img: 'portifolio1',
      date: '02/24',
      user: {
        proPic: 'user1',
        name: 'Bianca Martins',
      },
      tags: ['UX', 'Web'],
    },
    {
      id: 2,
      name: 'Portifolio 2',
      img: 'portifolio2',
      date: '12/23',
      user: {
        proPic: 'user2',
        name: 'Enzo Gabriel',
      },
      tags: ['UX/UI', 'Web'],
    },
    {
      id: 3,
      name: 'Portifolio 3',
      img: 'portifolio3',
      date: '12/23',
      user: {
        proPic: 'user3',
        name: 'Alice Alexandra',
      },
      tags: ['UX', 'Java'],
    },
    {
      id: 4,
      name: 'Portifolio 4',
      img: 'portifolio4',
      date: '12/23',
      user: {
        proPic: 'user4',
        name: 'Carolina Valentim',
      },
      tags: ['UI', 'JS'],
    },
  ]

  const [allPortifolios, setAllPortifolios] = useState(portifolios)

  const [filtedPortifolios, setFiltedPortifolios] = useState(allPortifolios)

  const handleFormOpen = () => {
    setFormOpen(true)
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
        allPortifolios,
        filtedPortifolios,
        setFiltedPortifolios,
        userPortifolios,
        setUserPortifolios,
        isRegistrationSuccess,
        setIsRegistrationSuccess
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
