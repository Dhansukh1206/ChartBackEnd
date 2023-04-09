const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnect = require("./mongodb");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/transaction", async (req, res) => {
  const data = await dbConnect();
  const getAllData = await data.find({}).toArray();
  res.send({
    data: getAllData,
    messagel: "Successfull get all transaction data!",
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
