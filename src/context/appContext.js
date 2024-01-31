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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
