import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar, Icon, Button } from 'antd-mobile';
import '../../css/WoDe/Gerenxinxi.css';

export default class Gerenxinxi extends Component {
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff',height:'55px'}}>个 人 信 息</NavBar>
                <div className="grxx_back"></div>
                <div className="grxx_box">
                    <span className="grxx_text">我的头像</span>
                    <div style={{float:'right'}}>
                        <img className="grxx_header" src={require('../../images/headImage.jpg')}/>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box">
                    <span className="grxx_text">昵称</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">卢毅双</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box">
                    <span className="grxx_text">个性签名</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">学如逆水行舟，不进则退</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box">
                    <span className="grxx_text">性别</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">女</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box">
                    <span className="grxx_text">生日</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">1999-03-15</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box">
                    <span className="grxx_text">账号与安全</span>
                    <div style={{float:'right'}}>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <Button 
                    style={{width:'60%',height:'20%',background:'#617ca6',color:'#fff',margin:'0 auto',marginTop:'7%'}}
                    activeStyle={{background:'grey'}}
                >退出登录</Button>
            </div>
        )
    }
}