import React from "react";
import { Link } from "react-router-dom";

const Recipes = (props) => {
  return (
    <div className="container">
        
      <div className="row">
          
        {props.recipes.map((recipe, i) => {
          return (
            <div className="col-10 col-md-4 col-sm-4" style={{ marginBottom: "2rem" }} key={i}>
              <div className="recipes__box">
                <img
                  className="recipe__box-img"
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                />
                <div className="recipe__text">
                  <h5 className="recipes__title">
                    {recipe.recipe.label.length < 20
                      ? `${recipe.recipe.label}`
                      : `${recipe.recipe.label.substring(0, 25)}...`}
                  </h5>
                    <p className="recipes__subtitle">Cooking Time: {recipe.recipe.totalTime}</p>
                  <p className="recipes__subtitle">
                    Source: <span>{recipe.recipe.source}</span>
                  </p>
                </div>
                <button className="recipe_buttons">
                  <Link
                    to={{
                      pathname: `/recipe/${i}`,
                      state: { recipe: recipe.recipe.label },
                    }}
                  >
                    View Recipe
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
