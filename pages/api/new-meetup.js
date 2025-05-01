// for the api route ( pages ) in nextjs this file must be under pages folder -> api folder -> file
// api folder name is mandatory, file name new-meetup is related to the same name as in the url path to trigger the api
// server side code and never exposed to client
// if the url is /new-meetup then this function wil be called
// build backend API endpoints ( API Routes ) it dont return HTML code but accept incoming http req with json and return JSON data

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, address, description } = data;

    // THIS CODE MUST NOT RUN ON CLIENT AS IT EXPOSE PWD and connect returns a promise
    const client = await MongoClient.connect(
      "mongodb+srv://subbupavar:zTGgF0tKjPN2RLqf@cluster0.8ysfkbe.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
    ); // the connection string is taken from mongodb atlas, here meetups is a database
    // can use try catch for handling error
    const db = client.db();
    const meetupsCollection = db.collection("meetups"); //Mongodb is no sql DB that works with connection ( table ) with documents(entries of table)
    // it will create collection if not exists
    const result = await meetupsCollection.insertOne(data);
    console.log("result", result);
    client.close();

    res.status(201).json({ message: "Meetup inserted!" }); // 201 for indication on insertion
  }
}

export default handler;
