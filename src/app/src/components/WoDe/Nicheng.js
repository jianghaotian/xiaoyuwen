import React, { Component } from 'react';
import { List, NavBar, Icon, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

class Nicheng extends Component {
    state = {
        value: 1,
        name:'卢毅双'
    }
    changeName = (e) => {
        if (e.target.value.length <= 13) {
            this.setState({
                name: e.target.value
            })
        }
    }
    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
            } else {
                alert('Validation failed');
            }
        });
    }
    onReset = () => {
        this.props.form.resetFields();
    }
    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
            callback();
        } else {
            callback(new Error('At least four characters for account'));
        }
    }
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
                {/* <div className="wode_back"></div> */}
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>昵 称</NavBar>
                <div className="logininput">
                    <span className='xiutext'>取一个好听的名字吧：</span>
                    <input type="text" placeholder="请输入昵称" value={this.state.name} onChange={this.changeName}/>
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

export default createForm()(Nicheng);
