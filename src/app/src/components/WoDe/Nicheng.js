import React, { Component } from 'react';
import { List, NavBar, Icon, Button, InputItem, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { setName, clearUsers, setUsers } from '../../redux/actions';

class Nicheng extends Component {
    state = {
        name: this.$store.getState().users.name || ''
    }
    changeName = (e) => {
        if (e.target.value.length <= 13) {
            this.setState({
                name: e.target.value
            })
        }
    }
    save = () => {

        Toast.loading('正在保存...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        if (this.$store.getState().users.phone !== '') {
            this.$api.set_name({name: this.state.name}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('保存成功', 1, null, false);
                    this.$store.dispatch(setName(this.state.name));
                    this.props.history.push('/wode/info');
                } else {
                    Toast.fail('保存失败', 1, null, false);
                }
            });
        }
    }

    
    componentDidMount() {
        // this.autoFocusInst.focus();
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>昵 称</NavBar>
                <div className="logininput">
                    <span className='xiutext'>取一个好听的名字吧（不超过13个字符）：</span>
                    <input type="text" placeholder="请输入昵称" value={this.state.name} onChange={this.changeName}/>
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

export default createForm()(Nicheng);
