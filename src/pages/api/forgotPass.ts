import { sentMail } from "@/services/forgotPass";
import type { NextApiRequest, NextApiResponse } from "next";
import { corsAllow } from "@/helper/cors";
import { connect } from "@/helper/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await corsAllow(req, res);

  const body = req.body;
  switch (req.method) {
    case "POST":
      try {
        const result = await sentMail(body.email);
        return res.status(200).json({ result });
      } catch (e: any) {
        return res.status(400).json({ message: e.message });
      }

  }
};

export default handler;
