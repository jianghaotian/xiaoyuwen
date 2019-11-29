import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar, Icon } from 'antd-mobile';
import '../../css/WoDe/Zhanghao.css';

export default class Zhanghao extends Component {
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff',height:'55px'}}>账 号 与 安 全</NavBar>
                <div className="wode_back"></div>
                <div className="zh_box a_click" onClick={()=>{this.toPath('/wode/info/mima')}}>
                    <i className={'iconfont icon-mima zh_i'}></i>
                    <span className="zh_text">修改密码</span>
                    <div style={{float:'right'}}>
                        <i className={'iconfont icon-youjiantou zh_you'}></i>
                    </div>
                </div>
                <div className="zh_box a_click" onClick={()=>{this.toPath('/wode/info/shouji')}}>
                    <i className={'iconfont icon-shouji zh_i'}></i>
                    <span className="zh_text">手机号</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">139****8956</span>
                        <i className={'iconfont icon-youjiantou zh_you'}></i>
                    </div>
                </div>
                <div className="zh_box a_click">
                    <i className={'iconfont icon-qq zh_i'}></i>
                    <span className="zh_text">QQ</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">未绑定</span>
                        <i className={'iconfont icon-youjiantou zh_you'}></i>
                    </div>
                </div>
                <div className="zh_box a_click">
                    <i className={'iconfont icon-weixin zh_i'}></i>
                    <span className="zh_text">微信</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">未绑定</span>
                        <i className={'iconfont icon-youjiantou zh_you'}></i>
                    </div>
                </div>
            </div>
        )
    }
}
