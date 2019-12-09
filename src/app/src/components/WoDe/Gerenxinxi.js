import React, { Component } from 'react';

import { NavBar, Icon, Button, Toast } from 'antd-mobile';
import '../../css/WoDe/Gerenxinxi.css';
import { clearTokenAll, clearUsers, setUsers } from '../../redux/actions';


export default class Gerenxinxi extends Component {
    constructor() {
        super();
        this.state = {
            head: require('../../images/headImage.jpg'),
            name: this.$store.getState().users.name || '',
            signature: this.$store.getState().users.signature ||  '',
            sex: this.$store.getState().users.sex || 'man',
            birthday: this.$store.getState().users.birthday || ''
        };
    }
    outLogin = () => {
        Toast.success('退出登录', 1, null, false);
        this.$store.dispatch(clearUsers());
        this.$store.dispatch(clearTokenAll());
        this.props.history.push('/home/wode');
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>个 人 信 息</NavBar>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/touxiang')}}>
                    <span className="grxx_text">我的头像</span>
                    <div style={{float:'right'}}>
                        <img className="grxx_header" src={this.state.head}/>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/nicheng')}}>
                    <span className="grxx_text">昵称</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">{this.state.name}</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/geqian')}}>
                    <span className="grxx_text">个性签名</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">{this.state.signature}</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/xingbie')}}>
                    <span className="grxx_text">性别</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">{this.state.sex === 'woman' ? '女' : '男'}</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/shengri')}}>
                    <span className="grxx_text">生日</span>
                    <div style={{float:'right'}}>
                        <span className="grxx_header">1999-03-15</span>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <div className="grxx_box a_click" onClick={()=>{this.props.history.push('/wode/info/zhanghao')}}>
                    <span className="grxx_text">账号与安全</span>
                    <div style={{float:'right'}}>
                        <i className={'iconfont icon-youjiantou grxx_you'}></i>
                    </div>
                </div>
                <Button
                    style={{width:'60%',height:'20%',background:'#617ca6',color:'#fff',margin:'0 auto',marginTop:'7%'}}
                    activeStyle={{background:'grey'}}
                    onClick={this.outLogin}
                >退出登录</Button>
            </div>
        )
    }
}
