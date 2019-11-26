import React, { Component } from 'react'
import LearnIdioms from './LearnIdioms'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Buchongshiju from './container/Shici/Buchongshiju'

export default class App extends Component {
  render() {
    return (
      <div>
        <Buchongshiju />
        {/* <Router>
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
          <Route path="/guanqia" component={Guanqia}/>
          <Route path="/xueshici" component={Xueshici}/>
          <Route path="/buchongshiju" component={Buchongshiju}/>
          <Route path="/wode" component={Wode}/>
          <Route path="/jindu" component={Jindu}/>
          <Route path="/gerenxinxi" component={Gerenxinxi}/>
          <Route path="/shezhi" component={Shezhi}/>
          <Route path="/shoucang" component={Shoucang}/>
        </Router> */}
      </div>
    )
  }
}

