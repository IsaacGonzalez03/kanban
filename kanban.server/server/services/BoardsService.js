import { dbContext } from '../db/DbContext'

class BoardsService {
  async getBoards(userId) {
    return await dbContext.Boards.find({ creatorId: userId })
  }
}
export const boardsService = new BoardsService()
