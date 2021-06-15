import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const ListSchema = new Schema({
  title: { type: String, required: true },
  boardId: { type: Schema.Types.ObjectId, ref: 'BoardId', required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
},
{ timestamps: true, toJSON: { virtuals: true } }
)
