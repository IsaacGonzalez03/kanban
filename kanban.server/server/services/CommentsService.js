import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async getCommentsByTaskId(id = {}) {
    return await dbContext.Comment.find(id)
  }

  async getComment(commentId) {
    return await dbContext.Comment.findById({ _id: commentId })
  }

  async createComment(body) {
    return await dbContext.Comment.create(body)
  }

  async editComment(body) {
    const data = await dbContext.Comment.findByIdAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) throw new BadRequest('Invalid Id')
    return data
  }

  async deleteComment(id, userId) {
    const data = await dbContext.Comment.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) throw new BadRequest('Invalid Id')
    return 'Deleted'
  }
}

export const commentsService = new CommentsService()
