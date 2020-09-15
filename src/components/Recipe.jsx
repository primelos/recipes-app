import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const api_key = "9a906e97d240da2fc6034b7d865bc204	";
const api_id = "a61d80ca";

const Recipe = (props) => {
    const [activeRecipe, setActiveRecipe] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const title = props.location.state.recipe;
            // console.log(title)
            const req = await fetch(
            `https://api.edamam.com/search?q=${title}&app_id=${api_id}&app_key=${api_key}`);
    
            const res = await req.json();
            setActiveRecipe(res.hits[0])
        }
        fetchData()
    },[props.location.state.recipe])
    // console.log(activeRecipe)
    // console.log(activeRecipe.recipe)       // WORKS
    // console.log(activeRecipe.recipe.image) // DOES NOT WORK 

    const renderCard = () => {
        return (
            <div className='container'>
            <div className="active-recipe">
                <img className='active-recipe__img' src={activeRecipe.recipe.image} alt={activeRecipe.recipe.label} />
                <h3 className='active-recipe__title'>{ activeRecipe.recipe.title }</h3>
                <h4 className='active-recipe__publisher'>Publisher: <span>
                    {activeRecipe.recipe.source}
                    </span>
                    </h4>
                    <p className='active-recipe__website'>Website:
                    <span><a href={activeRecipe.recipe.shareAs}>{activeRecipe.recipe.shareAs < 20 ? `${activeRecipe.recipe.shareAs}` : `${activeRecipe.recipe.shareAs.substring(0,25)}...`}</a></span>
                    </p>
                    <button className='active-recipe__button'>
                        < Link 
                            to={{
                                pathname: `/`
                            }}
                            >
                                Go Home
                            </Link>
                        </button>

            </div>
        </div>
        )
    }
    
    return <> {!activeRecipe.recipe ? null : renderCard()}</>

}
export default Recipe

// NOTES for rendering class state
// { this.state.active-recipe.length !== 0 &&
    //    <div>the you code</div> 

// }
