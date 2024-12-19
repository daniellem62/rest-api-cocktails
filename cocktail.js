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

// MVP 3
// create a function to create a new cocktail recipe
// read all the cocktails
// push the new recipe 
// return the new recipe
//export async function addCocktail(name, alcoholic, category, glassType) {
//    const newCocktail = {
//        name,
//        alcoholic,
//        category,
//        glassType,
//    }

//    const cocktails = await readCocktails();
//    cocktails.push(newCocktail);
//    await writeCocktails(cocktails);
//    return newCocktail;
//}

