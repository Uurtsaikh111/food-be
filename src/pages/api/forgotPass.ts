import { transport, mailOptions, updatePassword } from "@/services/forgotPass";
import type { NextApiRequest, NextApiResponse } from "next";
import { corsAllow } from "@/helper/cors";
import {connect} from "@/helper/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connect();
    await corsAllow(req, res);
  
    const body  = req.body;
    switch (req.method) {
        case "POST":
          try {
            const result = await transport.sendMail({...mailOptions});
            return res.status(200).json(result);
          } catch (e: any) {
            return res.status(400).json({ message: e.message });
          }
        case "PUT":
            try {
              const updatePass = await updatePassword(body.email );
              return res.status(200).json(updatePass);
            } catch (e: any) {
              return res.status(400).json({ message: e.message });
            }
      }
  
  };
  
  export default handler;
