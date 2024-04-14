import { UserModel } from "@/models/user.schema";
import jwt from "jsonwebtoken";

export const loginService = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({
      email: email,
      password: password,
    });
    if (email == user.email && password == user.password) {
      const userInfo = {
        email: email,
        password: password,
      };
      const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
        expiresIn: "1h",
      });
      return newToken;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const loginAdmin = async (status: string, password: string) => {
  try {
    const user = await UserModel.findOne({
      status: status,
      password: password,
    });
    if (status == user.status && password == user.password) {
      const userInfo = {
        status: status,
        password: password,
      };
      const newToken = jwt.sign(userInfo, "my-super-duper-secret-key", {
        expiresIn: "1h",
      });
      return newToken;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const createUser = async (
  name: string,
  email: string,
  address: string,
  password: string,
  status:String,
) => {
const checkEmail = await UserModel.findOne({
  email:email
})
if (checkEmail==null){
  const createUser = UserModel.create({ name, email, address, password,status});
  return createUser;
} else {
  throw new Error("Invalid credentials");
}};

