const nodemailer = require('nodemailer');
import { UserModel } from "@/models/user.schema";
  import { nanoid } from "nanoid";

  const code = nanoid(6);

  export const sentMail = async (email: string) => {
 try {
      const user = await UserModel.findOne({
        email: email,
      });
  
      if (email == user.email) {

{
  await UserModel.findOneAndUpdate(
    {
      email,
    },
    {
      password:code,
    }
  )
}
const transporter = nodemailer.createTransport({
          service: "Gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.PERSONAL_EMAIL,
            pass: process.env.EMAIL_PASSWORD
          },
        });
        const mailOptions = {
          from: process.env.PERSONAL_EMAIL,
          to: email,
          subject: "Your Food Delivery verification code",
          text: code,
        };
        transporter.sendMail(mailOptions, (error: string) => {
          if (error) {
          } else {
          }
        });
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (e: any) {
      throw new Error(e.message);
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