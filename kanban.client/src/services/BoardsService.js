import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BoardsService {
  async createBoard(newBoard) {
    try {
      const res = api.post('/api/boards/', newBoard)
      AppState.boards = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }

  async getBoards() {
    const res = await api.get('/api/boards')
    AppState.boards = res.data
  }

  async getBoardInfo(id) {
    const res = await api.get('api/boards/' + id)
    AppState.activeBoard = res.data
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
