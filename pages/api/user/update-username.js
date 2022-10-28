import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // console.log("api", data);
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db("ff");
      const users = db.collection("users");
      await users.findOneAndUpdate(
        { email: data.email },
        { $set: { username: data.name } }
      );
      client.close();
      res.status(201).json({ message: "Username updated!" });
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
