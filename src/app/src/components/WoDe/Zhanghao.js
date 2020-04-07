import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import '../../css/WoDe/Zhanghao.css';

export default class Zhanghao extends Component {
    constructor() {
        super();
        this.state = {
            phone: ''
        };
    }
    componentDidMount() {
        let allPhone = this.$store.getState().users.phone;
        let phone = allPhone[0] + allPhone[1] + allPhone[2] + '****' + allPhone[7] + allPhone[8] + allPhone[9] + allPhone[10];
        this.setState({
            phone: phone
        });
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>账 号 与 安 全</NavBar>
                <div className="zh_box a_click" onClick={()=>{this.props.history.push('/wode/info/mima')}}>
                    <i className={'iconfont icon-mima zh_i'}></i>
                    <span className="zh_text">修改密码</span>
                    <div style={{float:'right'}}>
                        <i className={'iconfont icon-youjiantou zh_you'}></i>
                    </div>
                </div>
                <div className="zh_box a_click" onClick={()=>{this.props.history.push('/wode/info/shouji')}}>
                    <i className={'iconfont icon-shouji zh_i'}></i>
                    <span className="zh_text">手机号</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">{this.state.phone}</span>
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
                    <i className={'iconfont icon-weixin1 zh_i'} style={{fontSize:'20px'}}></i>
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
