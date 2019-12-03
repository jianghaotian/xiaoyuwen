import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavBar, Button, Icon } from 'antd-mobile';

export default class Phonelogin extends Component {
    constructor() {
        super();
        this.state = {
            verityText: '获取验证码',
            verityDiv: 'verity-div',
            time: '',
            phone: '',
            verity: ''
        }
    }
    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    changeVerity = (e) => {
        this.setState({
            verity: e.target.value
        })
    }
    verity =()=>{
        let verityNum = 2;
        let time = setInterval(() => {
            verityNum --;
            this.setState({
                verityText: verityNum + 's后重新获取'
            })
            if(verityNum == 0){
                clearInterval(this.state.time);
                this.setState({
                    verityText: '重新获取',
                    verityDiv: 'verity-div',
                })
            }
        }, 1000);
        this.setState({
            verityDiv: 'verity-div1',
            time: time,
            verityText: verityNum + 's后重新获取'
        })
    }
    render() {
        return (
            <div className="logincontainer">
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>登 录</NavBar>
                <div className="logininput">
                    <input type="text" placeholder="请输入手机号" value={this.state.phone} onChange={this.changePhone}/>
                    <div className="verity">
                        <input type="text" placeholder="请输入验证码" value={this.state.verity} onChange={this.changeVerity}/>
                        <button className={this.state.verityDiv} onClick={this.verity}>{this.state.verityText}</button>
                    </div>
                    <div className="methods">
                        <Link to="/login" style={{color:'#000'}}>密码登录</Link>
                    </div>
                    <Button 
                        style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                                margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                        activeStyle={{background:'grey'}}
                    >登 录</Button> 
                </div>
                <div className="bottomicon">
                    <a className="iconfont icon-qq"></a>
                    <a className="iconfont icon-weixin1"></a>
                </div>
            </div>
        )
    }
}
