import { dbContext } from '../db/DbContext'

class ListsService {
  async getAll() {
    return await dbContext.Lists.find()
  }

  async getList(listId) {
    return await dbContext.Lists.findById(listId)
  }

  async createList(listData) {
    return await dbContext.Lists.create(listData)
  }

  async getListsByBoardId(boardId) {
    return await dbContext.Lists.find({ boardId })
  }
}

export const listsService = new ListsService()
