import React, { Component } from 'react';
import { NavBar, Icon, Button, Toast } from 'antd-mobile';
import '../../css/WoDe/Wode.css';
import { setGrade, clearUsers, setUsers } from '../../redux/actions';


export default class Nianji extends Component {
    constructor() {
        super();
        this.state = {
            grade: this.$store.getState().users.grade || 1
        };
    }
    save = () => {
        Toast.success('保存成功', 1, null, false);
        this.$store.dispatch(setGrade(this.state.grade));
        
        if (this.$store.getState().users.phone !== '') {
            this.$api.set_grade({grade: this.state.grade}).then(res => {
                // Toast.hide();
            }, () => {
                Toast.hide();
            });
        }
        this.props.history.push('/home/wode');
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>年 级</NavBar>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 1})}}>
                    <span className="wode_tab_text">一年级</span>
                    <Icon type='check' style={this.state.grade === 1 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 2})}}>
                    <span className="wode_tab_text">二年级</span>
                    <Icon type='check' style={this.state.grade === 2 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 3})}}>
                    <span className="wode_tab_text">三年级</span>
                    <Icon type='check' style={this.state.grade === 3 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 4})}}>
                    <span className="wode_tab_text">四年级</span>
                    <Icon type='check' style={this.state.grade === 4 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 5})}}>
                    <span className="wode_tab_text">五年级</span>
                    <Icon type='check' style={this.state.grade === 5 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
                </div>

                <div className="wode_tab a_click" onClick={() => {this.setState({grade: 6})}}>
                    <span className="wode_tab_text">六年级</span>
                    <Icon type='check' style={this.state.grade === 6 ? {color: '#617ca6',float:'right',marginRight:'1rem',marginTop:'0.8rem'} : {display: 'none'}}/>
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
