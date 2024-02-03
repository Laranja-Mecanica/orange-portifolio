import { useAppContext, useDialogContext } from '@/context'
import { api } from '@/lib/axios'
import { useState } from 'react'

const usePortifolio = () => {
  const { portifolios, setPortifolios } = useAppContext()

  const { setConfirmationMsg } = useDialogContext()

  const tags = ['UX', 'UI', 'Web']

  let token

  if (typeof window !== 'undefined') {
    token = window.sessionStorage.getItem('token')
  }

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const getAllPortifolios = async () => {
    api.get('/discover', options)
      .then(res => {
        setPortifolios([...res.data.portifolios])
        console.log(portifolios)
      })
      .catch(erro => console.log(erro))
  }

  const createPortifolio = portifolio => {
    api.post('/portifolios', portifolio, options)
      .then(res => console.log("ok"))
    setConfirmationMsg('Projeto adicionado')
  }

  const updatePortifolio = (portifolioId, portifolio) => {
    api.put(`/portifolios/${portifolioId}`, portifolio, options)
    setConfirmationMsg('Edição concluída')
  }

  const deletePortifolio = portifolioId => {
    api.delete(`/potifolios/${portifolioId}`, options)
    setConfirmationMsg('Projeto deletado')
  }

  const getPortifoliosByUser = async (id) => {

    api.get(`/users/${id}/portifolios`, options)
      .then(res => {
        setPortifolios([...res.data.portifolios])
      })
      .catch(error => console.log("Erro"))

  }

  const filterPortifoliosByTags = (tags) =>
    portifolios.filter((portifolio) =>
      tags.every((tag) => portifolio.tags.includes(tag))
    )

  return {
    tags,
    getAllPortifolios,
    createPortifolio,
    updatePortifolio,
    deletePortifolio,
    getPortifoliosByUser,
    filterPortifoliosByTags,
  }
}

export default usePortifolio