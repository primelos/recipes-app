import React, { useEffect, useState } from "react";
import Form from "./Form";
import Recipes from "./Recipes";

const api_key = "9a906e97d240da2fc6034b7d865bc204	";
const api_id = "a61d80ca";

const FoodCall = (props) => {
  const [myRecipe, setMyRecipe] = useState([]);

  
  const getRecipe = async (e) => {
      const recipeName = e.target.elements.recipeName.value;
      e.preventDefault();
      const api_call = await fetch(
          `https://api.edamam.com/search?q=${recipeName}&app_id=${api_id}&app_key=${api_key}`
          );
          
          const data = await api_call.json();
          setMyRecipe(data.hits);
        };
        console.log(myRecipe);
    

    useEffect(() => {

        const saveInfo = JSON.stringify(myRecipe)
        localStorage.setItem('recipes', saveInfo)
        const json = localStorage.getItem('recipes')
        const recp = JSON.parse(json)
        setMyRecipe(recp)


    }, []) 
   

  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe} />
      <Recipes recipes={myRecipe} />
    </div>
  );
};

export default FoodCall;
