export type FoodType = {
    foodName: string;
    categoryId:{
      _id:string
      name:string
      },
    price: number;
    foodImage: string;
    discount?: number;
    stock: number;
    ingredients: string[];
  };