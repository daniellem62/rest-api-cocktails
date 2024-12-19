import express from "express";
const app = express();
const port = 3002;

import { getCocktails } from "./cocktail.js";

app.use(express.json());

// create GET listener that responds with all cocktail data
app.get("/cocktails", async function (req, res) {
  const cocktails = await getCocktails();
  res.json(cocktails);
});

app.listen(port, function () {
  console.log(`Server is now listening on http://localhost:${port}`);
});

//This is where our requests and responses go
