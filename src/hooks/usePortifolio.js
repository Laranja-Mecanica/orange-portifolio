import { useAppContext, useDialogContext } from '@/context'
import { api } from '@/lib/axios'
import jwt from 'jsonwebtoken'

const usePortifolio = () => {
  const { portifolios, setPortifolios } = useAppContext()

  const { setConfirmationMsg, dispatch } = useDialogContext()

  const optionsTags = ['UX', 'UI', 'Web']

  let token

  if (typeof window !== 'undefined') {
    token = window.sessionStorage.getItem('token')
  }

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getAllPortifolios = async () => {
    api.get('/discover', options)
      .then((res) => {
        setPortifolios([...res.data.portifolios])
      })
      .catch((erro) => console.log(erro))
  }

  const createPortifolio = async (portifolio) => {
    api.post('/portifolios', portifolio, options)
      .then(() => {
        setConfirmationMsg('Projeto adicionado')
        dispatch({ type: 'confirmation' })
      })
      .catch((error) => console.log(error.response.data))

  }

  const updatePortifolio = (portifolioId, portifolio) => {
    api.put(`/portifolios/${portifolioId}`, portifolio, options)
      .then(() => {
        setConfirmationMsg('Edição concluída')
        dispatch({ type: 'confirmation' })
      })
      .catch((error) => console.log(error.response.data))
  }

  const deletePortifolio = (portifolioId) => {
    api.delete(`/portifolios/${portifolioId}`, options)
      .then(() => {
        setConfirmationMsg('Projeto deletado')
        getPortifoliosByUser(jwt.decode(token).sub)
        dispatch({ type: 'confirmation' })
      })
  }

  const getPortifoliosByUser = async (id) => {
    api.get(`/users/${id}/portifolios`, options)
      .then((res) => {
        setPortifolios([...res.data.portifolios])
      })
      .catch((error) => console.log('Erro'))
  }

  const filterPortifoliosByTags = (tags) =>
    portifolios.filter((portifolio) =>
      tags.every((tag) => portifolio.tags.includes(tag)),
    )

  return {
    optionsTags,
    getAllPortifolios,
    createPortifolio,
    updatePortifolio,
    deletePortifolio,
    getPortifoliosByUser,
    filterPortifoliosByTags,
  }
}

export default usePortifolio
