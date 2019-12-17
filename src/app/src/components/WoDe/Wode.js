import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import '../../css/WoDe/Wode.css';
import { Toast } from 'antd-mobile';
import { clearTokenAll, clearUsers, setUsers } from '../../redux/actions';
import { headUrl } from '../../request/url';

export default class Wode extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
            head: require('../../images/headImage.jpg'),
            name: '未登录',
            signature: '点击此处登录',
            grade: 1
        };
    }
    componentDidMount() {
        if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone !== '') {
            this.setState({
                login: true,
                head: this.$store.getState().users.head || require('../../images/headImage.jpg'),
                name: this.$store.getState().users.name || '修改昵称',
                signature: this.$store.getState().users.signature || '编辑个性签名',
                grade: this.$store.getState().users.grade
            })
        } else if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone === '') {
            this.$api.get_info({uid: this.$store.getState().token.uid}).then(res => {
                console.log(res);

                if (res.data.status === 0) {
                    let ownUsers = {
                        name: res.data.data[0].Uname || '',
                        signature: res.data.data[0].Usignature || '',
                        sex: res.data.data[0].Usex || '',
                        birthday: res.data.data[0].Ubirthday || '',
                        phone: res.data.data[0].Uphone || '',
                        grade: res.data.data[0].Ugrade || 1,
                        head: res.data.data[0].Uimage || '',
                    }
                    this.setState({
                        login: true,
                        head: ownUsers.head || require('../../images/headImage.jpg'),
                        name: ownUsers.name || '修改昵称',
                        signature: ownUsers.signature || '编辑个性签名',
                        grade: headUrl + ownUsers.grade
                    })
                    this.$store.dispatch(setUsers(ownUsers));
                } else if (res.data.status === -1 || res.data.status === -2) {
                    this.$store.dispatch(clearTokenAll());
                    this.$store.dispatch(clearUsers());
                }
            }, () => {
                Toast.hide();
                Toast.info('网络无响应，未请求到用户信息', 1, null, false);
            });   
        }
    }
    UNSAFE_componentWillUnmount() {
        // clearInterval(this.state.time);
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" style={{background:'#617ca6',color:'#fff'}}>我 的</NavBar>
                <div className="wode_info a_click" onClick={()=>{this.state.login ? this.props.history.push('/wode/info') : this.props.history.push('/login')}}>
                    <div style={{height:'90%',padding:'1rem'}}>
                        <img className="wode_header" src={this.state.head} />
                        <div style={{float:"right",width:'70%'}}>
                            <div style={{float:"left",fontSize:'20px',minWidth:'100%'}}>{this.state.name}</div>
                            <div style={{float:"left",fontSize:'15px',marginTop:'1rem'}}>{this.state.signature}</div>
                        </div>
                    </div>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/nianji')}}>
                    <i className={'iconfont icon-nianji wode_i'}></i>
                    <span className="wode_tab_text">年级</span>
                    <span className="wode_you" style={{fontSize:'13px'}}>
                        {this.state.grade === 1 ? '一年级' : ''}
                        {this.state.grade === 2 ? '二年级' : ''}
                        {this.state.grade === 3 ? '三年级' : ''}
                        {this.state.grade === 4 ? '四年级' : ''}
                        {this.state.grade === 5 ? '五年级' : ''}
                        {this.state.grade === 6 ? '六年级' : ''}
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/jindu')}}>
                    <i className={'iconfont icon-xuexijindu wode_i'}></i>
                    <span className="wode_tab_text">成绩单</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/shoucang')}}>
                    <i className={'iconfont icon-shoucangjia wode_i'}></i>
                    <span className="wode_tab_text">收藏夹</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/fankui')}}>
                    <i className={'iconfont icon-yijianfankui wode_i'}></i>
                    <span className="wode_tab_text">意见反馈</span>
                    <i className={'iconfont icon-youjiantou wode_you'}></i>
                </div>
                <div className="wode_tab a_click" onClick={()=>{this.props.history.push('/wode/guanyu')}}>
                    <i className={'iconfont icon-banbenhao wode_i'}></i>
                    <span className="wode_tab_text">关于小语文</span>
                    <span className="wode_you" style={{fontSize:'13px'}}>
                        版本1.0.0
                        <i style={{marginLeft:'1rem'}} className={'iconfont icon-youjiantou'}></i>
                    </span>
                </div>
                {/* <div className="wode_tab a_click">
                    <i className={'iconfont icon-gengxin wode_i'}></i>
                    <span className="wode_tab_text">更新题库</span>
                    <div className="wode_red"></div>
                </div> */}
            </div>
        )
    }
}
