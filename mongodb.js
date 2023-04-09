const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "mydb";
const client = new MongoClient(url);

const dbConnect = async () => {
  const result = await client.connect();
  db = result.db(databaseName);
  return db.collection("transaction");
};

module.exports = dbConnect;