import { dbContext } from '../db/DbContext'

class CommentsService {
  async getCommentsByTaskId(taskId) {
    return await dbContext.Comment.find({ taskId })
  }

  async createComment(commentData) {
    return await dbContext.Comment.create(commentData)
  }
}

export const commentsService = new CommentsService()
