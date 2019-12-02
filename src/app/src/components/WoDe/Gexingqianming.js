import React, { Component } from 'react';
import { NavBar, Icon, List, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const data = [];
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Gexingqianming extends Component {
    constructor() {
        super();
        this.state = {
            files: data,
            multiple: false,
            type: 'tel',
        };
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files: files
        });
    }
    render() {
        const { files,type } = this.state;
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>个 性 签 名</NavBar>
                <div style={{position:'relative'}}>
                    <div style={{position:'absolute',right:'0.3rem',bottom:'0.3rem',zIndex:'999',color:'#888'}}>25</div>
                    <List>
                        <TextareaItem
                            {...getFieldProps('note1')}
                            rows={3}
                            placeholder="个性签名"
                        />
                    </List>
                </div>
            </div>
        )   
    }
}

export default createForm()(Gexingqianming);
