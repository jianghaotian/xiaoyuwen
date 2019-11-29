import React, { Component } from 'react';
import history from '../../config/history';
import { NavBar,Icon, InputItem, Button, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

const data = [];
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Shoujihao extends Component {
    constructor() {
        super();
        this.state = {
            files: data,
            multiple: false,
            type: 'tel',
        }
    }
    toPath = (path) => {
        history.push(path);
        history.go();
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
    }
    render() {
        const { files,type } = this.state;
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.toPath('/wode/info/zhanghao')}}/>} style={{background:'#617ca6',color:'#fff'}}>手 机 号</NavBar>
                <div className="wode_back"></div>
                <InputItem
                    {...getFieldProps('money3')}
                    type={type}
                    defaultValue={''}
                    placeholder="请输入您的手机号"
                    clear
                    maxLength='11'
                    editable={true}
                    updatePlaceholder={true}
                    extra='11位手机号'
                >手机号：</InputItem>
                <Button 
                    style={{width:'60%',height:'20%',background:'#617ca6',color:'#fff',margin:'0 auto',marginTop:'7%'}}
                    activeStyle={{background:'grey'}}
                >确认</Button>
            </div>
        )
    }
}

export default createForm()(Shoujihao);
