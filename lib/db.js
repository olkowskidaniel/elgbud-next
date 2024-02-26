import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = new MongoClient(process.env.DB_CONNECTION);
  return client;
}
