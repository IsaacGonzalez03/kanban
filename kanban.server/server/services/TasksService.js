import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
class TasksService {
  async getTasksByListId(id = {}) {
    return await dbContext.Task.find(id)
  }

  async getTask(taskId) {
    return await dbContext.Task.findById({ _id: taskId })
  }

  async createTasks(body) {
    return await dbContext.Task.create(body)
  }

  async editTask(body) {
    const data = await dbContext.Task.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) throw new BadRequest('Invalid Id')
    return data
  }

  async deleteTask(id, userId) {
    const foundTask = await this.getTask(id)
    if (!foundTask) {
      throw new BadRequest('Task not found')
    }
    const data = await dbContext.Task.findOneAndDelete({ _id: id, creatorId: userId })
    if (!data) throw new BadRequest('Invalid Id')
    return 'Deleted'
  }
}

export const tasksService = new TasksService()
