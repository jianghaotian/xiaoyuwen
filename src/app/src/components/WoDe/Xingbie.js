import React, { Component } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import '../../css/WoDe/Wode.css';

export default class Xingbie extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>性 别</NavBar>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">男</span>
                    <Icon type='check' style={{color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">女</span>
                    <Icon type='check' style={{color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                >保 存</Button> 

            </div>
        )
    }
}
