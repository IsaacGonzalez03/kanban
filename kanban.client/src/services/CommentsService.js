import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentsService {
  async getComments(id) {
    try {
      const res = await api.get(`api/tasks/${id}/comments`)
      AppState.comments[id] = res.data
      logger.log(res.data)
    } catch (error) {
    }
  }

  async createComment(newComment) {
    await api.post('api/comments', newComment)
    this.getComments(newComment.taskId)
  }

  async deleteComment(id, taskId) {
    await api.delete('api/comments/' + id)
    this.getComments(taskId)
  }
}
export const commentsService = new CommentsService()
