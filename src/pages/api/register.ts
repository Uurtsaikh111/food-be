import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/services/user";
import { connect } from "@/helper/db";

connect();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await createUser("firstName", "lastName", "email", 22);
    res.status(200).json({ message: "Sucsessfully user created", user });
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
