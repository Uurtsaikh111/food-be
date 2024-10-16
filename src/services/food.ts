import { FoodModel } from "@/models/food.schema";
import { FoodType } from "@/utils/types/food";

export const createFood = async (
  foodName: string,
  categoryId: {
    _id: string;
    name: string;
  },
  foodImage: String,
  price: Number,
  discount: Number,
  ingredients: String,
  stock: Number
) => {
  const createFood = FoodModel.create({
    foodName,
    categoryId,
    foodImage,
    price,
    discount,
    ingredients,
    stock,
  });
  return createFood;
};

export const getFoods = async (): Promise<FoodType[]> => {
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

export const updateFood = async (
  id: string,
  updateName: Partial<FoodType>,
  updatePrice: number,
  updateImage:string ,
  updateDiscount:number ,
  updateIngredients:string[],
  updetedStock: number,
) => {
  try {
    await FoodModel.updateOne(
      { _id: id },
  { name: updateName ,price: updatePrice ,image:updateImage , discount:updateDiscount,
    ingredients:updateIngredients, stock:updetedStock
  }
    
    );
  } catch (e: any) {
    throw new Error(e.message);
  }
};
