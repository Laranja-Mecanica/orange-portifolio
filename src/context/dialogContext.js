import { createContext, useContext, useReducer, useState } from 'react'

const DialogContext = createContext()

export const DialogProvider = ({ children }) => {
  const [confirmationMsg, setConfirmationMsg] = useState('Produto cadastrado')

  const [portifolio, setPortifolio] = useState({
    portifolioId: null,
    name: '',
    img: '',
    user: { name: '' },
    tags: [],
  })

  const initialStates = {
    formOpen: false,
    detailsOpen: false,
    confOpen: false,
    deleteOpen: false
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'form':
        return {
          ...initialStates,
          formOpen: true
        }
      case 'details':
        return {
          ...initialStates,
          detailsOpen: true
        }
      case 'confirmation':
        return {
          ...initialStates,
          confOpen: true
        }
      case 'delete':
        return {
          ...initialStates,
          deleteOpen: true
        }
      case 'cancel':
        return {
          ...initialStates
        }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialStates)

  return (
    <DialogContext.Provider
      value={{
        portifolio,
        setPortifolio,
        confirmationMsg,
        setConfirmationMsg,
        dispatch,
        state
      }}
    >
      {children}
    </DialogContext.Provider>
  )
}

export const useDialogContext = () => useContext(DialogContext)