import { useAppContext, useDialogContext } from '@/context'
import { api } from '@/lib/axios'

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

  const getPortifoliosByUser = async (id) => {
    api.get(`/users/${id}/portifolios`).then((res) => console.log(res.data))
  }

  const filterPortifoliosByTags = (tags) =>
    allPortifolios.filter((portifolio) =>
      tags.every((tag) => portifolio.tags.includes(tag)),
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
