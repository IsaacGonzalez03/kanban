import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardsService {
  async createBoard(newBoard) {
    try {
      const res = api.post('/api/boards/', newBoard)
      logger.log(res)
    } catch (error) {
      Notification.toast(error)
    }
  }

  async getBoards() {
    const res = await api.get('/api/boards')
    AppState.boards = res.data
    logger.log(res)
  }

  async getBoardInfo(id) {
    const res = await api.get('api/boards/' + id)
    logger.log('get the info for board', res)
  }

  async deleteBoard(id) {
    const res = await api.delete('api/boards/' + id)
    this.getBoards()
    logger.log(res)
  }

  async editBoard(id, newBoard) {
    const res = await api.put('api/boards/' + id, newBoard)
    this.getBoards()
    return res
  }
}

export const boardsService = new BoardsService()
