import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getComment)
      .post('', this.createComment)
      .put('/:id', this.editComment)
      .delete('/:id', this.deleteComment)
  }

  async getComment(req, res, next) {
    try {
      const comment = await commentsService.getComment(req.params.id)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const newComment = await commentsService.createComment(req.body)
      return res.send(newComment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next) {
    req.params.id = req.userInfo.id
    try {
      const data = await commentsService.editComment(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    req.body.creatorId = req.userId
    try {
      const data = await commentsService.deleteComment(req.params.id, req.userInfo.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}
