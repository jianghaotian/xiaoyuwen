import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBar, Button, Icon } from 'antd-mobile';

export default class Phonelogin extends Component {
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>登 录</NavBar>
                
                <div className="logininput">
                    <form action="">
                        <input type="text" required placeholder="请输入手机号" />
                        <div className="verity">
                            <input type="text" required placeholder="请输入验证码" />
                            <a>获取验证码</a>
                        </div>
                        <div className="methods">
                            <Link to="/login" style={{color:'#000'}}>密码登录</Link>
                            <a>忘记密码?</a>
                        </div>
                        <Button 
                            style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                    margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                            activeStyle={{background:'grey'}}
                        >登 录</Button> 
                    </form>
                </div>
                <div className="bottomicon">
                    <a className="iconfont icon-qq"></a>
                    <a className="iconfont icon-weixin"></a>
                </div>
            </div>
        )
    }
}
