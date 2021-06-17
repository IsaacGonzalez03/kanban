import { AppState } from '../AppState'
import Notification from '../utils/Notification'

// const { default: Notification } = require('../utils/Notification')
const { api } = require('./AxiosService')

class ListsService {
  async getLists(id) {
    try {
      const res = await api.get('api/boards/' + id + '/lists')
      AppState.lists = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }

  async createList(newList) {
    await api.post('api/lists', newList)
    this.getLists(newList.boardId)
  }

  async deleteList(id, boardId) {
    await api.delete('api/lists/' + id)
    this.getLists(boardId)
  }
}

export const listsService = new ListsService()
