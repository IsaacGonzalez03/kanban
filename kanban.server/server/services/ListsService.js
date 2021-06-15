import { dbContext } from '../db/DbContext'

class ListsService {
  async getList(listId) {
    return await dbContext.Lists.findById(listId)
  }

  async createList(listData) {
    return await dbContext.Lists.create(listData)
  }
}

export const listsService = new ListsService()
