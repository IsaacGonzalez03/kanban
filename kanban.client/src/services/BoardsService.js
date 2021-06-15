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
}

export const boardsService = new BoardsService()
