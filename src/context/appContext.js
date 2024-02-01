import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [formOpen, setFormOpen] = useState(false)
  const [confOpen, setConfOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

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

  const handleFormClose = () => {
    setFormOpen(false)
  }

  const handleConfOpen = () => {
    setConfOpen(true)
    setFormOpen(false)
    setDeleteOpen(false)
  }
  const handleConfClose = () => {
    setConfOpen(false)
  }

  const handleDetailsOpen = () => {
    setDetailsOpen(true)
    setFormOpen(false)
  }
  const handleDetailsClose = () => {
    setDetailsOpen(false)
    setFormOpen(true)
  }

  const handleDeleteOpen = () => {
    setDeleteOpen(true)
  }

  const handleDeleteClose = () => {
    setDeleteOpen(false)
  }

  const menuOptions = [
    {
      text: 'Editar',
      openModal: handleFormOpen
    },
    {
      text: 'Excluir',
      openModal: handleDeleteOpen
    }
  ]

  return (
    <AppContext.Provider
      value={{
        portifolio,
        setPortifolio,
        menuOptions,
        formOpen,
        confOpen,
        detailsOpen,
        deleteOpen,
        setDetailsOpen,
        handleFormOpen,
        handleFormClose,
        handleConfOpen,
        handleConfClose,
        handleDetailsOpen,
        handleDetailsClose,
        handleDeleteOpen,
        handleDeleteClose,


        allPortifolios,
        filtedPortifolios,
        setFiltedPortifolios

      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
