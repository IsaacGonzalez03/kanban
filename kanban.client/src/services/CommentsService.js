import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class CommentsService {
  async getComments(id) {
    try {
      const res = await api.get(`api/tasks/${id}/comments`)
      AppState.comments[id] = res.data
      logger.log('comment recieved', res.data)
    } catch (error) {
    }
  }

  async createComment(newComment, account) {
    await api.post('api/comments', newComment, account)
    this.getComments(newComment.taskId)
    logger.log('created comment', newComment, account)
  }

  async deleteComment(id, taskId) {
    await api.delete('api/comments/' + id)
    this.getComments(taskId)
  }
}
export const commentsService = new CommentsService()
