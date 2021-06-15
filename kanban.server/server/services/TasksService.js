import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasks(userId) {
    return await dbContext.Tasks.find({ creatorId: userId })
  }

  async createTasks(taskData) {
    return await dbContext.Tasks.create(taskData)
  }
}

export const tasksService = new TasksService()
