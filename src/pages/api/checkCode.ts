import type { NextApiRequest, NextApiResponse } from "next";
import { corsAllow } from "@/helper/cors";
import {connect} from "@/helper/db";
import { checkCode, newPassword } from "@/services/forgotPass";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connect();
    await corsAllow(req, res);
  
    const body  = req.body;
    switch (req.method) {
        case "POST":
            try {
              const checkPass = await checkCode(body.email, body.password);
              return res.status(200).json(checkPass);
            } catch (e: any) {
              return res.status(400).json({ message: e.message });
            }
            case "PUT":
              try {
                const checkPass = await newPassword(body.email, body.password);
                return res.status(200).json(checkPass);
              } catch (e: any) {
                return res.status(400).json({ message: e.message });
              }
      }
  
  };
  
  export default handler;
