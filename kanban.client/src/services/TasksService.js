import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async getTasks(id) {
    try {
      const res = await api.get(`api/lists/${id}/tasks`)
      AppState.tasks[id] = res.data
      logger.log(res.data)
    } catch (error) {
    }
  }

  async createTask(newTask) {
    await api.post('api/tasks', newTask)
    this.getTasks(newTask.listId)
  }

  async deleteTask(id, listId) {
    try {
      await api.delete('api/tasks/' + id)
      this.getTasks(listId)
    } catch (error) {

    }
  }
}
export const tasksService = new TasksService()
