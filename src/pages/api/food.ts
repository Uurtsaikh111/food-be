import { corsAllow } from "@/helper/cors";
import {connect} from "@/helper/db";
import { createFood , getFoods } from "@/services/food";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connect();
    await corsAllow(req, res);
  
    const body  = req.body;
    switch (req.method) {
        case "POST":
          try {
            const result = await createFood(body.name , body.categoryId,
                body.image,body.price,body.discount,body.ingredients,body.stock);
            return res.status(200).json(result);
          } catch (e: any) {
            return res.status(400).json({ message: e.message });
          }
        case "GET":
          try {
            const foods = await getFoods();
            return res.status(200).json({ foods: foods });
          } catch (e: any) {
            return res.status(400).json({ message: e.message });
          }
        // case "DELETE":
        //     try {
        //       const delCategory = await deleteCategory(body.id);
        //       return res.status(200).json(delCategory);
        //     } catch (e: any) {
        //       return res.status(400).json({ message: e.message });
        //     }
      }
  
  };
  
  export default handler;
  