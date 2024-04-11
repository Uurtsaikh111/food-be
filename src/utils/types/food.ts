export type FoodType = {
    name: string;
    categoryId:{
      _id:string
      name:string
      },
    price: number;
    image: string;
    discount?: number;
    stock: number;
    ingredients: string[];
  };