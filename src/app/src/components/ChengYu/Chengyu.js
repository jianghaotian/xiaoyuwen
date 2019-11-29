import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom'

export default class Chengyu extends Component {
    render() {
        return (
            <div className="p1">
                <NavBar style={{backgroundColor:"#617ca6",color:"#fff"}}>成 语</NavBar>
                <div className="p2 p9">
                    <div className="p3 p5">
                        <Link to="/"><button className="p4">学成语</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/"><button className="p4">成语接龙</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p5">
                        <Link to="/"><button className="p4">易错字</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/"><button className="p4">猜成语</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
