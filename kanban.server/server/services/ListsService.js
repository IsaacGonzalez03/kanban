import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class ListsService {
  async getListsByBoardId(id = {}) {
    return await dbContext.List.find(id)
  }

  async getList(listId) {
    return await dbContext.List.findById({ _id: listId })
  }

  async createList(body) {
    return await dbContext.List.create(body)
  }

  async editList(body) {
    const data = await dbContext.List.findByIdAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) throw new BadRequest('Invalid Id')
    return data
  }

  async deleteList(id, userId) {
    const data = await dbContext.List.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) throw new BadRequest('Invalid Id')
    return 'Deleted'
  }
}

export const listsService = new ListsService()
