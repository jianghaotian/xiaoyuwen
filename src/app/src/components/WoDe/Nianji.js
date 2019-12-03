import React, { Component } from 'react';
import { NavBar, Icon, Button } from 'antd-mobile';
import '../../css/WoDe/Wode.css';

export default class Nianji extends Component {
    constructor() {
        super();
        this.state = {
            grade: 1
        };
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>年 级</NavBar>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">一年级</span>
                    <Icon type='check' style={this.state.grade === 1 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">二年级</span>
                    <Icon type='check' style={this.state.grade === 2 ? {} : {display: 'none'} , {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">三年级</span>
                    <Icon type='check' style={this.state.grade === 3 ? {} : {display: 'none'} , {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">四年级</span>
                    <Icon type='check' style={this.state.grade === 4 ? {} : {display: 'none'}, {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">五年级</span>
                    <Icon type='check' style={this.state.grade === 5 ? {} : {display: 'none'} , {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
                </div>

                <div className="wode_tab a_click">
                    <span className="wode_tab_text">六年级</span>
                    <Icon type='check' style={this.state.grade === 6 ? {} : {display: 'none'} , {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'}}/>
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
