import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { BoardSchema } from '../models/Board'
import { CommentSchema } from '../models/Comment'
import { TaskSchema } from '../models/Task'
import { ListSchema } from '../models/List'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Board = mongoose.model('Board', BoardSchema);
  List = mongoose.model('List', ListSchema);
  Task = mongoose.model('Task', TaskSchema);
  Comment = mongoose.model('Comment', CommentSchema);
}

export const dbContext = new DbContext()
