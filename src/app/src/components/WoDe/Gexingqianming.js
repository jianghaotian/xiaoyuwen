import React, { Component } from 'react';
import { NavBar, Icon, List, TextareaItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { setSignature, clearUsers, setUsers } from '../../redux/actions';


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
            signature: this.$store.getState().users.signature ||  ''
        };
    }
    // componentDidMount() {
    //     this.text.value = "aaaaa"
    // }
    save = () => {

        Toast.loading('正在保存...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        if (this.$store.getState().users.phone !== '') {
            this.$api.set_signature({signature: this.text.state.value}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('保存成功', 1, null, false);
                    this.$store.dispatch(setSignature(this.text.state.value));
                    this.props.history.push('/wode/info');
                } else {
                    Toast.fail('保存失败', 1, null, false);
                }
            });
        }
    }

    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>个 性 签 名</NavBar>
                <div style={{position:'relative'}}>
                    {/* <div style={{position:'absolute',right:'0.3rem',bottom:'0.3rem',zIndex:'999',color:'#888'}}>25</div> */}
                    <List>
                        <TextareaItem
                            rows={3}
                            count={25}
                            placeholder="个性签名"
                            ref={text => this.text = text}
                            defaultValue={this.state.signature}
                        />
                    </List>
                </div>
                <Button 
                    style={{width:'60%',height:'3rem',fontSize:'16px',background:'#617ca6',color:'#fff',
                            margin:'0 auto',lineHeight:'3rem',marginTop:'5%'}}
                    activeStyle={{background:'grey'}}
                    onClick={this.save}
                >保 存</Button> 
            </div>
        )   
    }
}

export default createForm()(Gexingqianming);
