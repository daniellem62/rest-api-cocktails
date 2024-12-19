import express from "express";
const app = express();
const port = 3002;

import { getCocktails,
  getCocktailById,
  addCocktail,
 } from "./cocktail.js";

app.use(express.json());

// create GET listener that responds with all cocktail data
app.get("/cocktails", async function (req, res) {
  const cocktails = await getCocktails();
  res.json(cocktails);
});

//MVP 2 - create a GET listener that returns cocktail by id
// create variable that pulls the id from the uri 
// from path /cocktails/:id 

app.get("/cocktails/:id", async (req, res) => {
  const { id } = req.params;
  const cocktail = await getCocktailById(id);
  res.json(cocktail);
})

//MVP 3 - create a post listener that create a new cocktail
// create a variable that gets the new cocktails for the request body
// use the add cocktail function
// send response
app.post("/cocktails", async (req, res) => {
  const { id, name, alcoholic, category, glassType } = req.body;
  const cocktail = await addCocktail(id, name, alcoholic, category, glassType);
  res.json(cocktail);
})

app.listen(port, function () {
  console.log(`Server is now listening on http://localhost:${port}`);
});



//This is where our requests and responses go
