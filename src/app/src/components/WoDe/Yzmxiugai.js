import React, { Component } from 'react';
import { List, InputItem, Button,NavBar,Icon,Toast } from 'antd-mobile';


export default class Yzmxiugai extends Component {
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff'}}>账 号 与 安 全</NavBar>
                
            </div>
        )
    }
}
