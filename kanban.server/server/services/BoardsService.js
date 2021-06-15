import { dbContext } from '../db/DbContext'

class BoardsService {
  async getBoards(userId) {
    return await dbContext.Boards.find({ creatorId: userId })
  }

  async getOne(boardId) {
    return await dbContext.Boards.findById(boardId)
  }

  async createBoard(boardData) {
    return await dbContext.Boards.create(boardData)
  }
}
export const boardsService = new BoardsService()
