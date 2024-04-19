import { CategoryModel } from "@/models/category.schema";
import { CategoryType } from "@/utils/types/category";

export const createCategory = async (name: string) => {
    const createCategory = await CategoryModel.create({ name });
    return createCategory;
  };

export const getCategories = async (): Promise<CategoryType[]> => {
    try {
      const categories = await CategoryModel.find();
      return categories;
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
  export const getCategoryById = async (id: string) => {
    try {
      const category = await CategoryModel.findOne({ _id: id });
      return category;
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
  
  export const deleteCategory = async (id: string) => {
    try {
      const delCategory=await CategoryModel.deleteOne({ _id: id });
      return delCategory
    } catch (e: any) {
      throw new Error(e.message);
    }
  };
  export const updateCategory = async (id: string, updateInfo: Partial<string>) => {
    try {
      const updatedCategory =await CategoryModel.updateOne({ _id: id }, { name:updateInfo });
      return updatedCategory
    } catch (e: any) {
      throw new Error(e.message);
    }
  };