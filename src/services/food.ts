import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/utils/types/food";

export const createFood = async (
  name: string,
  categoryId: {
  _id:string
  name:string
  },
  image: String,
  price: Number,
  discount: Number,
  ingredients: String,
  stock: Number
) => {
  const createFood = FoodModel.create({
    name,
    categoryId,
    image,
    price,
    discount,
    ingredients,
    stock,
  });
  return createFood;
};

export const getFoods = async (): Promise<FoodType[] > => {
  try {
    const foods: FoodType[] = await FoodModel.find().populate("categoryId");
    return foods;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const getFoodById = async (id: string) => {
  try {
    const food = await FoodModel.findOne({ _id: id });
    return food;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const deleteFood = async (id: string) => {
  try {
    await FoodModel.deleteOne({ _id: id });
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const updateFood = async (id: string, updateInfo: Partial<FoodType>) => {
  try {
    await FoodModel.updateOne({ _id: id }, { updateInfo });
  } catch (e: any) {
    throw new Error(e.message);
  }
};
