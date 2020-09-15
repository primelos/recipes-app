import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FoodCall from '../components/FoodCall'
import Recipe from './Recipe'


const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={FoodCall} />
                <Route exact path='/recipe/:id' component={Recipe} />
            </Switch>
        </div>
    )
}

export default Routes
