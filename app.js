import express from "express";
const app = express()
const port = 3002

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to the Cocktails Recipes API");
});

app.listen(port, function () {
  console.log(`Server is now listening on http://localhost:${port}`);
});

//This is where our requests and responses go