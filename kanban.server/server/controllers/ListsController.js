import BaseController from '../utils/BaseController'
import { listsService } from '../services/ListsService'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'

export class ListsController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getList)
      .get('/:id/tasks', this.getTasksByListId)
      .post('', this.createList)
      .put('/:id', this.editList)
      .delete('/:id', this.deleteList)
  }

  async getList(req, res, next) {
    try {
      const list = await listsService.getList(req.params.id)
      return res.send(list)
    } catch (error) {
      next(error)
    }
  }

  async getTasksByListId(req, res, next) {
    try {
      const tasks = await tasksService.getTasksByListId({ listId: req.params.id })
      return res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async createList(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const newList = await listsService.createList(req.body)
      return res.send(newList)
    } catch (error) {
      next(error)
    }
  }

  async editList(req, res, next) {
    try {
      req.params.id = req.userInfo.id
      const data = await listsService.editList(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteList(req, res, next) {
    req.body.creatorId = req.userInfo.id
    try {
      const data = await listsService.deleteList(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
