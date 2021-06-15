import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasks(id = {}) {
    return await dbContext.Task.find(id)
  }

  async createTasks(body) {
    return await dbContext.Task.create(body)
  }
}

export const tasksService = new TasksService()
