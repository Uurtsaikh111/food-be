import { corsAllow } from "@/helper/cors";
import {connect} from "@/helper/db";
import { createCategory, getCategories } from "@/services/category";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connect();
    await corsAllow(req, res);
  
    const body  = req.body;
    switch (req.method) {
        case "POST":
          try {
            const result = await createCategory(body.name);
            return res.status(200).json(result);
          } catch (e: any) {
            return res.status(400).json({ message: e.message });
          }
        case "GET":
          try {
            const categories = await getCategories();
            return res.status(200).json({ categories: categories });
          } catch (e: any) {
            return res.status(400).json({ message: e.message });
          }
      }
  
  };
  
  export default handler;
  