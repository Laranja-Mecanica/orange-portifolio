import { useAppContext, useDialogContext } from '@/context'
import React from 'react'

const usePortifolio = () => {
  const { allPortifolios } = useAppContext()

  const { setConfirmationMsg } = useDialogContext()

  const tags = ['UX', 'UI', 'Web']


  const createPortifolio = () => {
    setConfirmationMsg('Projeto adicionado')
  }

  const updatePortifolio = () => {
    setConfirmationMsg('Edição concluída')
  }

  const deletePortifolio = () => {
    setConfirmationMsg('Projeto deletado')
  }

  const filterPortifoliosByTags = tags => allPortifolios.filter(portifolio => tags.every(tag => portifolio.tags.includes(tag)))

  return {
    tags,
    createPortifolio,
    updatePortifolio,
    deletePortifolio,
    filterPortifoliosByTags
  }
}

export default usePortifolio