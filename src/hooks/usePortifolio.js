import { useAppContext, useDialogContext } from '@/context'
import { api } from '@/lib/axios'

const usePortifolio = () => {
  const { allPortifolios, setUserPortifolios } = useAppContext()

  const { setConfirmationMsg } = useDialogContext()

  const tags = ['UX', 'UI', 'Web']

  const token = window.sessionStorage.getItem('token')

  const options = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const createPortifolio = portifolio => {
    api.post('/portifolios', portifolio, options)
      .then(res => console.log("ok"))
    setConfirmationMsg('Projeto adicionado')
  }

  const updatePortifolio = () => {
    setConfirmationMsg('Edição concluída')
  }

  const deletePortifolio = () => {
    setConfirmationMsg('Projeto deletado')
  }

  const getPortifoliosByUser = async (id) => {

    api.get(`/users/${id}/portifolios`)
      .then(res => setUserPortifolios([...res.data.portifolios]))
      .catch(error => console.log("Erro"))

  }

  const filterPortifoliosByTags = (tags) =>
    allPortifolios.filter((portifolio) =>
      tags.every((tag) => portifolio.tags.includes(tag))
    )

  return {
    tags,
    createPortifolio,
    updatePortifolio,
    deletePortifolio,
    getPortifoliosByUser,
    filterPortifoliosByTags,

  }
}

export default usePortifolio
