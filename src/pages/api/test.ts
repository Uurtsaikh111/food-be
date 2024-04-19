export default async function handler() {
  console.log("Entered the serverless functionssss");
  console.log(process.env.MONGO_DB_URL);
  return { dummy: "data" };
}
