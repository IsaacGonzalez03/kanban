import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async getTasks(id) {
    try {
      const res = await api.get('api/lists/' + id + '/tasks')
      logger.log(res.data)
    } catch (error) {

    }
  }
}
export const tasksService = new TasksService()
