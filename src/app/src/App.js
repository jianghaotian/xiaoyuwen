import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Open from './container/OpenScren/Open.js'
import Shouye from './container/Shouye.js'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={Open}/>
                        <Route path="/shouye" exact component={Shouye}/>
                    </Switch>
                    
                </div>
            </Router>
        )
    }
}