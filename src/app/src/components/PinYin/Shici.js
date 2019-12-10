import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { NavBar} from 'antd-mobile';

export default class Shici extends Component {
    render() {
        return (
            <div className="p1">
                <NavBar style={{backgroundColor:"#6189B8",color:"#fff"}}>诗 词</NavBar>
                <div className="p2 p8">
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
