import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const ListSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  boardId: { type: Schema.Types.ObjectId, ref: 'Board', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
