import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import {Link} from 'react-router-dom'
import '../../css/PinYin/pinyin.css'
export default class Pinyin extends Component {
    render() {
        return (
            <div className="p1">
                <NavBar
                style={{backgroundColor:"#6189B8",color:"#fff"}}
                >拼 音</NavBar>
                <div className="p2 p7">
                    <div className="p3 p5">
                        <Link to="/pinyin/shengmu"><button className="p4">声母</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/pinyin/kanzi"><button className="p4">看字识音</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p5">
                        <Link to="/pinyin/yunmu"><button className="p4">韵母</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p6">
                        <Link to="/pinyin/tingyin"><button className="p4">听音选字</button></Link>
                    </div>
                </div>
                <div className="p2">
                    <div className="p3 p5">
                        <Link to="/pinyin/zhengtiyin"><button className="p4">整体音</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
