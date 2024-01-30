import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [portifolio, setPortifolio] = useState({
    id: 0,
    name: '',
    img: '',
    user: { name: '' },
    tags: [],
  })

  return (
    <AppContext.Provider
      value={{
        portifolio,
        setPortifolio,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
