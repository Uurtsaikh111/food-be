import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/services/user";
import { connect } from "@/helper/db";
import NextCors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connect();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  if (!req.body?.name || !req.body?.email || !req.body?.password) {
    res.status(400).json("firstName, lastName,email is missing");
  }

  const { name, email, address, password, status} = req.body;
  console.log(name, email);
  try {
    const user = await createUser(name, email, address, password,status);

    res.status(200).json({ message: "Successfully user created", user });
    console.log(user);
  } catch (e: any) {
    return res.status(400).json({ message: e.message });
  }
};

export default handler;
