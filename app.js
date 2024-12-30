import express from "express";
const app = express();
const port = 3002;

import { getCocktails,
  getCocktailById,
  addCocktail,
  editCocktail,
  deleteCocktail,
  getCocktailByKey
} from "./cocktail.js";

app.use(express.json());

//MVP 2 - create a GET listener that returns cocktail by id
// create variable that pulls the id from the uri 
// from path /cocktails/:id 

//MVP 3 - create a post listener that create a new cocktail
// create a variable that gets the new cocktails from the request body
// use the add cocktail function
// send response
app.post("/cocktails", async (req, res) => {
  try {
    const { id, name, alcoholic, category, glassType, instructions, ingredients, ingredientMeasures } = req.body;
    const cocktail = await addCocktail(id, name, alcoholic, category, glassType, instructions, ingredients, ingredientMeasures);
    if (cocktail) {
      res.status(201).json({
        success: true,
        payload: cocktail,
      });
    } else {
      res.status(400).json({
        success: false,
        payload: "Failed to add cocktail"
      });
    }
  } catch (error) {
    console.error("Error!", error);
    res.status(500).json({
      success: false,
      payload: "An error occurred while creating a cocktail"
    });
  }
});

//MVP 4 - create a patch listener that edits a cocktail
// create a variable that gets the updated cocktail from the request body
// use the edit cocktail function
// send new cocktail
app.patch("/cocktails/:id", async (req, res) => {
  const { id } = req.params;
  const { name, alcoholic, category, glassType, instructions, ingredients, ingredientMeasures } = req.body;
  const newCocktail = await editCocktail(id, name, alcoholic, category, glassType, instructions, ingredients, ingredientMeasures);
  res.json(newCocktail);
});


app.delete("/cocktails/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCocktail = await deleteCocktail(id);
  res.json(deletedCocktail);
});


app.get("/cocktails/filter", async (req, res) => {
  const { key, value } = req.query;
  try {
    const cocktail = await getCocktailByKey(key, value);
    if (cocktail && cocktail.length > 0) {
      res.json({
        success: true,
        payload: cocktail,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: "No cocktails found matching the given filter",
      });
    }
  } catch (error) {
    console.error("Error!", error);
    res.status(500).json({
      success: false,
      payload: "An error occurred while finding the cocktail"
    });
  }
});


app.get("/cocktails", async function (req, res) {
  try {  
    const cocktails = await getCocktails();
    if (cocktails) {
      res.json({
        success: true,
        payload: cocktails,
      });
    } else {
      res.status(404).json({  
        success: false,  
        payload: "Cocktails not found"
      });
    }
  } catch (error) {
    console.error("Error!", error);
    res.status(500).json({
      success: false,
      payload: "An error occurred",
    });
  }
});

app.get("/cocktails/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const cocktail = await getCocktailById(id);
    if (cocktail) {
      res.json({
        success: true,
        payload: cocktail,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: "Cocktail not found",
      });
    }
  } catch (error) {
    console.error("Error!", error);
    res.status(500).json({
      success: false,
      payload: "An error occurred while finding the cocktail"
    });
  }
});

app.listen(port, function () {
  console.log(`Server is now listening on http://localhost:${port}`);
});

//This is where our requests and responses go
