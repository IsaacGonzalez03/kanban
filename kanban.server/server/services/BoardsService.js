import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class BoardsService {
  async getBoards(id = {}) {
    return await dbContext.Board.find(id)
  }

  async getOne(boardId) {
    const data = await dbContext.Board.findById({ _id: boardId })
    if (!data) throw new BadRequest('Invalid Id')
    return data
  }

  async createBoard(body) {
    return await dbContext.Board.create(body)
  }

  async deleteBoard(id, userId) {
    const data = await dbContext.Board.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) throw new BadRequest('Invalid Id')
    return 'Deleted'
  }

  async editBoard(body) {
    const data = await dbContext.Board.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) throw new BadRequest('Invalid Id')
    return data
  }
}
export const boardsService = new BoardsService()
