import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CommentSchema = new Schema({
  description: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  taskId: { type: Schema.Types.ObjectId, ref: 'Task' }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
