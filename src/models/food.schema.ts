import mongoose, { model, Schema } from "mongoose";

const foodSchema = new Schema({
  name: String,
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  image: {
    type: String,
    required: true 
  },
  price: Number,
  discount: Number,
  ingredients: Array(String),
  stock:Number
});

export const FoodModel = mongoose.models.Food || model("Food", foodSchema);