import mongoose from 'mongoose'
const Schema = mongoose.Schema
export const BoardSchema = new Schema({
  title: { type: String, required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
}, { timestamps: true, toJSON: { virtuals: true } }
)
