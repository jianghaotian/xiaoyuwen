import React, { Component } from 'react'
<<<<<<< HEAD
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Open from './container/js/OpenScren/Open.js'
import Shouye from './container/js/Shouye.js'

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
=======
import LearnIdioms from './LearnIdioms'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/shouye" component={Shouye}/>
          <Route path="/shengmu" component={Shengmu}/>
          <Route path="/yunmu" component={Yunmu}/>
          <Route path="/zhengtiyin" component={Zhengtiyin}/>
          <Route path="/kanzishiyin" component={Kanzishiyin}/>
          <Route path="/tingyinxuanzi" component={Tingyinxuanzi}/>
          <Route path="/xuechengyu" component={LearnIdioms}/>
          <Route path="/chengyujielong" component={Chengyujielong}/>
          <Route path="/chengyuyicuozi" component={Chengyuyicuozi}/>
          <Route path="/caichengyu" component={Caichengyu}/>
          <Route path="/guanqia" component={}/>
          <Route path="/xueshici" component={Xueshici}/>
          <Route path="/buchongshiju" component={Buchongshiju}/>
          <Route path="/wode" component={Wode}/>
          <Route path="/jindu" component={Jindu}/>
          <Route path="/gerenxinxi" component={Gerenxinxi}/>
          <Route path="/shezhi" component={Shezhi}/>
          <Route path="/shoucang" component={Shoucang}/>
        </Router>
      </div>
    )
  }
}

>>>>>>> eeb845b62a5d4da22ea70348f16aa8f2852e64bf
