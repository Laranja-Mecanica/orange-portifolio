import { useDialogContext } from '@/context'
import React from 'react'

const usePortifolio = () => {
  const { setConfirmationMsg } = useDialogContext()

  const createPortifolio = () => {
    setConfirmationMsg('Projeto adicionado')
  }

  const updatePortifolio = () => {
    setConfirmationMsg('Edição concluída')
  }

  const deletePortifolio = () => {
    setConfirmationMsg('Projeto deletado')
  }

  return {
    createPortifolio,
    updatePortifolio,
    deletePortifolio
  }
}

export default usePortifolio