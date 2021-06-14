import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService'
export class BoardsController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:userId', this.getBoards)
      // .post('', this.createBoard)
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
}
