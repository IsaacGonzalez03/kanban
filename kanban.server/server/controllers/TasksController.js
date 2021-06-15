import BaseController from '../utils/BaseController'
import { tasksService } from '../services/TasksService'
import { commentsService } from '../services/CommentsService'
import { Auth0Provider } from '@bcwdev/auth0provider'
export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getTask)
      .get('/:id/comments', this.getCommentsByTaskId)
      .post('', this.createTasks)
      .put('/:id', this.editTask)
      .delete('/:id', this.deleteTask)
  }

  async getTask(req, res, next) {
    try {
      const task = await tasksService.getTask(req.params.id)
      return res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByTaskId(req, res, next) {
    try {
      const comments = await commentsService.getCommentsByTaskId(req.params.taskId)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async createTasks(req, res, next) {
    try {
      const newTask = await tasksService.createTasks(req.body)
      return res.send(newTask)
    } catch (error) {
      next(error)
    }
  }

  async editTask(req, res, next) {
    req.body.creatorId = req.userInfo.id
    try {
      const data = await tasksService.editTask(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteTask(req, res, next) {
    req.body.creatorId = req.userInfo.id
    try {
      const data = await tasksService.deleteTask(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
