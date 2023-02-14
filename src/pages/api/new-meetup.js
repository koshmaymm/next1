// api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    // const client = await MongoClient.connect(
    //   "mongodb+srv://TestUser:mWkZYRcsCXmm8eMB@api-nodejs.qu3traw.mongodb.net/meetups?retryWrites=true&w=majority"
    // );
    const client = await MongoClient.connect(process.env.MONGODB_URL);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log("result ", result);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
