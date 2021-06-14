import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  complete: { trype: Boolean, default: false },
  description: { type: String, required: false },
  listId: { type: Schema.Types.ObjectId, ref: 'List', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
