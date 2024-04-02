
import mongoose from "mongoose";
const url: string = process.env.MONGO_DB_URL as string;

export const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connect successfully");
  } catch (error) {
    console.log(error);
  }
};
