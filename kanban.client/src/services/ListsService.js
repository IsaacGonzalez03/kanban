import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Notification from '../utils/Notification'

// const { default: Notification } = require('../utils/Notification')
const { api } = require('./AxiosService')

class ListsService {
  async getLists(id) {
    try {
      const res = await api.get('api/boards/' + id + '/lists')
      AppState.lists = res.data
      logger.log(res.data, 'get fucked')
    } catch (error) {
      Notification.toast(error)
    }
  }
}

export const listsService = new ListsService()
