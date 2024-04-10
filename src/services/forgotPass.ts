const nodemailer = require('nodemailer');
import { UserModel } from "@/models/user.schema";
  import { nanoid } from "nanoid";

  const code = nanoid(6);

  export const transport = nodemailer.createTransport({
    service: "Gmail",
    host:"smtp.gmail.com",
    port :465,
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
  });

  export const mailOptions = {
    from: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
    to: "een2477@gmail.com",
    subject: "Your verification code",
    text: code,
  };

  export const updatePassword = async (email: string) => {
    const checkEmail = await UserModel.findOne({
        email:email
      })


      if (checkEmail){
      const updatedPassword =await UserModel.updateOne({ email: email}, { password:code});
      return updatedPassword
    } else {
      throw new Error("Invalid credentials");
    }
  };

  export const newPassword = async (email: string, password:string) => {
  try{
      const newPassword =await UserModel.updateOne({ email: email}, { password:password});
      return newPassword
    } catch {
      throw new Error("Invalid credentials");
    }
  };

  export const checkCode = async(email:string,password:string) => {
    const checkPassword = await UserModel.findOne({
      password:password,
      email:email
    }) 
    if (checkPassword){
      return checkPassword
    } else {
      throw new Error("Invalid credentials");
    }
}