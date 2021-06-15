import BaseController from '../utils/BaseController'
import { listsService } from '../services/ListsService'

export class ListsController extends BaseController {
  constructor() {
    super('api/lists')
    this.router
      .post('', this.createList)
      .get('/:id', this.getList)
  }

  async getList(req, res, next) {
    try {
      const list = await listsService.getList(req.params.id)
      return res.send(list)
    } catch (error) {
      next(error)
    }
  }

  async createList(req, res, next) {
    try {
      const list = await listsService.createList(req.body)
      return res.send(list)
    } catch (error) {
      next(error)
    }
  }
}
