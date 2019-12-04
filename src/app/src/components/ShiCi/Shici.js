import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
import '../../css/ShiCi/shici.css';

export default class Shici extends Component {
    render() {
        return (
            <div className="p1">
                <NavBar
                style={{backgroundColor:"#6189B8",color:"#fff"}}
                >诗 词</NavBar>
                <div className="p2 p8">
                    <div className="p3 p5">
                        <Link to="/shici/xueshici"><button className="p4">学诗词</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/shici/buchong"><button className="p4">补充诗句</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p5">
                        <Link to="/shici/yicuozi"><button className="p4">易错字</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
