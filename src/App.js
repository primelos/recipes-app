import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'

const api_key = '9a906e97d240da2fc6034b7d865bc204	'
const api_id = 'a61d80ca'

function App() {
  // const [getRecipe, setGetRecipe] = useState('working')

  const getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}&from=0&to=3&calories=591-722&health=alcohol-free`)

    const data = await api_call.json()
    console.log(data)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Recipe Search</h1>
      </header>
      <Form getRecipe={getRecipe}/>
    </div>
  );
}

export default App;
