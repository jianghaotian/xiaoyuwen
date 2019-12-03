import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon } from 'antd-mobile';
import '../../css/Login/login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}} rightContent={<Link to="/register" style={{color:'#fff'}}>立即注册</Link>}>登 录</NavBar>


                <div className="logininput">
                    <input type="text" required placeholder="请输入手机号" />
                    <input type="password" required placeholder="请输入密码" />
                    <div className="methods">
                        <Link to="/login/phone" style={{color:'#000'}}>验证码登录</Link>
                    </div>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                    >登 录</Button>
                </div>
                <div className="bottomicon">
                    <a className="iconfont icon-qq"></a>
                    <a className="iconfont icon-weixin"></a>
                </div>
            </div>
        )
    }
}
