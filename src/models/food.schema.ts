import mongoose, { model, Schema } from "mongoose";

const foodSchema = new Schema({
  foodName: String,
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  foodImage: {
    type: String,
    required: true 
  },
  price: Number,
  discount: Number,
  ingredients: Array(String),
  stock:Number
});

export const FoodModel = mongoose.models.Food || model("Food", foodSchema);