# 🍸 Cocktail Recipes API

## 📌 Overview

The Cocktail Recipes API is a RESTful API that allows users to explore, create, update, and delete cocktail recipes. It uses a JSON-based database to store recipes, making it easy to manage and retrieve cocktail information.

## 🚀 Features

📖 Retrieve a list of all cocktails or a specific recipe.

➕ Create a new cocktail recipe.

✏️ Update existing cocktail recipes.

❌ Delete a recipe from the database.

🔍 Search for cocktails by name or ingredients.

## 🛠️ Tech Stack

Backend: Node.js, Express.js

Tools: Postman

📂 API Endpoints

🔍 Get All Cocktails

```bash GET /api/cocktails
```

**Response:**


```bash
[
  {
    "id": 1,
    "name": "Mojito",
    "ingredients": ["White Rum", "Sugar", "Lime", "Soda Water", "Mint"],
    "instructions": "Muddle mint leaves with sugar and lime juice, add rum, and top with soda water."
  }
]
```

## 🔍 Get a Specific Cocktail
```bash
GET /api/cocktails/:id
```

**Response:**
```bash
{
  "id": 1,
  "name": "Mojito",
  "ingredients": ["White Rum", "Sugar", "Lime", "Soda Water", "Mint"],
  "instructions": "Muddle mint leaves with sugar and lime juice, add rum, and top with soda water."
}
```
## ➕ Add a New Cocktail
```bash
POST /api/cocktails
```
**Request Body:**
```bash
{
  "name": "Margarita",
  "ingredients": ["Tequila", "Triple Sec", "Lime Juice", "Salt"],
  "instructions": "Shake all ingredients with ice and strain into a salt-rimmed glass."
}
```

## ✏️ Update a Cocktail
```bash
PUT /api/cocktails/:id
```
**Request Body:**
```bash
{
  "name": "Updated Margarita",
  "ingredients": ["Tequila", "Triple Sec", "Lime Juice", "Salt"],
  "instructions": "Blend with ice for a frozen margarita."
}
```
## ❌ Delete a Cocktail
```bash
DELETE /api/cocktails/:id
```
**Response:**
```bash
{
  "message": "Cocktail deleted successfully."
}
```
## 🔧 Installation & Usage

# 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/cocktail-recipes-api.git
cd cocktail-recipes-api
```
# 2️⃣ Install Dependencies
```bash
npm install
```
# 3️⃣ Run the Server
```bash
npm start
```
The API will be available at http://localhost:3000.



## 📌 Future Improvements

✅ Authentication & authorization

📦 Migrate from JSON storage to a database (MongoDB, PostgreSQL, etc.)

🌍 Deploy the API for public access

## 👨‍💻 Contributing

Feel free to fork, create issues, and submit pull requests to improve the project!

