import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
import '../../css/Pinyin/pinyin.css';
import '../../css/Shici/shici.css';

export default class Shici extends Component {
    render() {
        return (
            <div className="p1">
                <NavBar
                style={{backgroundColor:"#6189B8",color:"#fff"}}
                >成语</NavBar>
                <div className="p2 s1">
                    <div className="p3 p5">
                        <Link to="/"><button className="p4">学诗词</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/"><button className="p4">补充诗句</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p5">
                        <Link to="/"><button className="p4">易错字</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
