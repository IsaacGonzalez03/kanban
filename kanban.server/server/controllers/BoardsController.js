import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService'
export class BoardsController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:userId', this.getBoards)
      .get('/:userId/:id', this.getOne)
      .post('', this.createBoard)
      // .put('/:boardId', this.editBoard)
      // .delete('boardId', this.deleteBoard)
  }

  async getBoards(req, res, next) {
    try {
      const boards = await boardsService.getBoards(req.params.userId)
      return res.send(boards)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const board = await boardsService.getOne(req.params.id)
      return res.send(board)
    } catch (error) {
      next(error)
    }
  }

  async createBoard(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const board = await boardsService.createBoard(req.body)
      return res.send(board)
    } catch (error) {
      next(error)
    }
  }
}
