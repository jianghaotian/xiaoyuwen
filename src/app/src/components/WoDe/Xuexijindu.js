import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../../css/WoDe/Xuexijindu.css';

export default class Xuexijindu extends Component {
    constructor(){
        super();
        this.state={
            name:'补充诗句',
            time:'2019-12-17 15:14',
            score:'80'
        }
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>成 绩 单</NavBar>
                <div className="xxjd_box a_click">
                    <div>
                        <span className="xxjd_text">{this.state.name}</span>
                        <span className="xxjd-time">{this.state.time}</span>
                    </div>
                
                    <div className="xxjd_text_l">
                        <span className="scoretext">分数:</span>
                        <span className="score">{this.state.score}</span>
                        <i className={'iconfont icon-youjiantou cj-jiantou'}></i>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
