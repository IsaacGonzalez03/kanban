import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { boardsService } from '../services/BoardsService'
import { listsService } from '../services/ListsService'
export class BoardsController extends BaseController {
  constructor() {
    super('api/boards')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBoards)
      .get(':id', this.getOneBoard)
      .get(':id/lists', this.getListsByBoardId)
      .post('', this.createBoard)
      .put('/:id', this.editBoard)
      .delete(':id', this.deleteBoard)
  }

  async getAllBoards(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const boards = await boardsService.getAllBoards({ creatorId: req.userInfo.id })
      return res.send(boards)
    } catch (error) {
      next(error)
    }
  }

  async getOneBoard(req, res, next) {
    try {
      const board = await boardsService.getOneBoard(req.params.id)
      return res.send(board)
    } catch (error) {
      next(error)
    }
  }

  async getListsByBoardId(req, res, next) {
    try {
      const lists = listsService.getListsByBoardId({ boardId: req.params.id })
      return res.send(lists)
    } catch (error) {
      next(error)
    }
  }

  async createBoard(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const newBoard = await boardsService.createBoard(req.body)
      return res.send(newBoard)
    } catch (error) {
      next(error)
    }
  }

  async editBoard(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await boardsService.editBoard(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteBoard(req, res, next) {
    try {
      req.body.id = req.params.id
      const data = await boardsService.deleteBoard(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
