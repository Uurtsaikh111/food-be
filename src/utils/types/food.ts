export type FoodType = {
    title: string;
    categoryId:{
      _id:string
      name:string
      },
    price: number;
    image: string;
    discpunt?: number;
    stock: number;
    ingredients: string[];
  };