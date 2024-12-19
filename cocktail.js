import { readCocktails, writeCocktails } from "./helpers.js";

// This is where our functions go

// MVP 1
// create function that get's cocktail data and stores in a variable
export async function getCocktails() {
  const cocktails = await readCocktails();
  return cocktails;
}

// create GET listener that responds with all cocktail data (app.js)
