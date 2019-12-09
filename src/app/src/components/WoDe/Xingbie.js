import React, { Component } from 'react';
import { NavBar, Icon, Button, Toast } from 'antd-mobile';
import '../../css/WoDe/Wode.css';
import { setSex, clearUsers, setUsers } from '../../redux/actions';

export default class Xingbie extends Component {
    constructor() {
        super();
        this.state = {
            sex: this.$store.getState().users.sex || 'man'
        };
    }
    save = () => {
        
        Toast.loading('正在保存...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        if (this.$store.getState().users.phone !== '') {
            this.$api.set_sex({sex: this.state.sex}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    Toast.success('保存成功', 1, null, false);
                    this.$store.dispatch(setSex(this.state.sex));
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
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/info')}}/>} style={{background:'#617ca6',color:'#fff'}}>性 别</NavBar>

                <div className="wode_tab a_click" onClick={() => {this.setState({sex: 'man'})}}>
                    <span className="wode_tab_text">男</span>
                    <Icon type='check' style={this.state.sex === 'man' ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({sex: 'woman'})}}>
                    <span className="wode_tab_text">女</span>
                    <Icon type='check' style={this.state.sex === 'woman' ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
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
