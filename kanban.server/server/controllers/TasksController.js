import BaseController from '../utils/BaseController'
import { tasksService } from '../services/TasksService'

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .get('/', this.getTasks)
      .post('', this.createTasks)
  }

  async getTasks(req, res, next) {
    try {
      const tasks = await tasksService.getTasks()
      return res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async createTasks(req, res, next) {
    try {
      const task = await tasksService.createTasks(req.body)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }
}
