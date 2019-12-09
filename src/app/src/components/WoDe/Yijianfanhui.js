import React, { Component } from 'react';
import { NavBar, Icon,List, TextareaItem, ImagePicker, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../../css/WoDe/Yijianfanhui.css';

const data = [];
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Yijianfanhui extends Component {
    constructor(){
        super();
        this.state = {
            files: data,
            multiple: false,
            type: 'tel'
        };
    }
    onChange = (files, type, index) => {
        // console.log(files, type, index);
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
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>意 见 反 馈</NavBar>
                <List>
                    <TextareaItem
                        {...getFieldProps('note1')}
                        rows={6}
                        placeholder="请在这里写下您的建议和遇到的问题，我们将会不断进步~"
                    />
                </List>
                <div className='yijian_image'>添加图片(选填)</div>
                <div className="yijian_upload">
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 7}
                        multiple={true}
                    />
                </div>
                <InputItem
                    {...getFieldProps('money3')}
                    type={type}
                    defaultValue={''}
                    placeholder="(选填)"
                    clear
                    maxLength='11'
                    editable={true}
                    updatePlaceholder={true}
                    extra='11位手机号'
                >联系方式：</InputItem>
                <Button 
                    style={{width:'60%',height:'20%',background:'#617ca6',color:'#fff',margin:'0 auto',marginTop:'7%'}}
                    activeStyle={{background:'grey'}}
                >发送</Button>
            </div>
        )   
    }

}

export default createForm()(Yijianfanhui);