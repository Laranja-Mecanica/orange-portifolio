import { createContext, useContext, useState } from 'react'

const DialogContext = createContext()

export const DialogProvider = ({ children }) => {
  const [formOpen, setFormOpen] = useState(false)
  const [confOpen, setConfOpen] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const [deleteOpen, setDeleteOpen] = useState(false)

  const [confirmationMsg, setConfirmationMsg] = useState('Produto cadastrado')

  const [portifolio, setPortifolio] = useState({
    portifolioId: null,
    name: '',
    img: '',
    user: { name: '' },
    tags: [],
  })

  const handleFormOpen = () => {
    setFormOpen(true)
    setPortifolio({
      portifolioId: null,
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

  const handleFormEditOpen = (portifolio) => {
    setFormOpen(true)
    console.log(portifolio)
    setPortifolio({ ...portifolio })
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

  const handleDeleteOpen = (portifolio) => {
    console.log(portifolio)
    setPortifolio(portifolio)
    setDeleteOpen(true)
  }

  const handleDeleteClose = () => {
    setDeleteOpen(false)
  }

  const menuOptions = [
    {
      text: 'Editar',
      openModal: handleFormEditOpen,
    },
    {
      text: 'Excluir',
      openModal: handleDeleteOpen,
    },
  ]

  return (
    <DialogContext.Provider
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
        confirmationMsg,
        setConfirmationMsg,
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}

export const useDialogContext = () => useContext(DialogContext)
