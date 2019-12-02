import React, { Component } from 'react';
import { List, NavBar, Icon, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class Nicheng extends Component {
    componentDidMount() {
        // this.autoFocusInst.focus();
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>昵 称</NavBar>
                <List renderHeader={() => '取一个好听的名字吧！'}>
                    <InputItem
                        {...getFieldProps('inputclear')}
                        clear
                        placeholder="请输入昵称"
                        defaultValue='这是旧的名字'
                    ></InputItem>
                </List>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                >保 存</Button> 
            </div>
        )
    }
}

export default createForm()(Nicheng);
