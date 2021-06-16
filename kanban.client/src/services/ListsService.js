import { AppState } from '../AppState'
import { logger } from '../utils/Logger'

const { default: Notification } = require('../utils/Notification')
const { api } = require('./AxiosService')

class ListsService {
  async getLists(id) {
    try {
      const res = api.get('api/boards/' + id + '/lists')
      AppState.lists = res.data
      logger.log(AppState.lists)
    } catch (error) {
      Notification.toast(error)
    }
  }
}

export const listsService = new ListsService()
