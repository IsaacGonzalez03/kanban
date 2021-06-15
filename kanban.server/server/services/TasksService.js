import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasks() {
    return await dbContext.Tasks.find()
  }

  async createTasks(taskData) {
    return await dbContext.Tasks.create(taskData)
  }
}

export const tasksService = new TasksService()
