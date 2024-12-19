import { readCocktails, writeCocktails } from "./helpers.js";

// This is where our functions go

// MVP 1
// create function that get's cocktail data and stores in a variable
export async function getCocktails() {
  const cocktails = await readCocktails();
  return cocktails;
}

// create GET listener that responds with all cocktail data (app.js)

//MVP 2
// create a function that takes in an ID parameter 
//read all cocktails
// find id 
//searches cocktail with matching id
//returns found cocktail

export async function getCocktailById (id){
  const cocktails = await readCocktails();
  const found = cocktails.find ((cocktails) => cocktails.id === id);
  return found;
}