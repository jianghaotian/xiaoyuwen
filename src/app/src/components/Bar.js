import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Pinyin from './PinYin/Pinyin';
import Chengyu from './ChengYu/Chengyu';
import Shici from './ShiCi/Shici';
import Wode from './WoDe/Wode';
import { Toast } from 'antd-mobile';
import { clearTokenAll, clearUsers, setUsers } from '../redux/actions';

export default class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.match.params.tab || 'pinyin'
        };
    }
    componentDidMount() {
        if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone === '') {
            this.$api.get_info({uid: this.$store.getState().token.uid}).then(res => {
                // console.log(res);
                if (res.data.status === 0) {
                    let ownUsers = {
                        name: res.data.data[0].Uname || '',
                        signature: res.data.data[0].Usignature || '',
                        sex: res.data.data[0].Usex || '',
                        birthday: res.data.data[0].Ubirthday || '',
                        phone: res.data.data[0].Uphone || '',
                        grade: res.data.data[0].Ugrade || 1,
                        head: res.data.data[0].Uimage || ''
                    }
                    this.$store.dispatch(setUsers(ownUsers));
                } else if (res.data.status === -1 || res.data.status === -2) {
                    this.$store.dispatch(clearTokenAll());
                    this.$store.dispatch(clearUsers());
                }
            }, () => {
                Toast.hide();
                // Toast.info('当前未连接网络', 1, null, false);
            });
        }
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                {/* <div className="wode_back"></div> */}

                <TabBar unselectedTintColor="#949494" tintColor="#6189B8" barTintColor="white">
                    <TabBar.Item
                        title="拼音"
                        key="pinyin"
                        icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        selectedIcon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        selected={this.state.selectedTab === 'pinyin'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'pinyin',
                            });
                        }}
                    >
                        <Pinyin history={this.props.history}/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        selectedIcon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        title="成语"
                        key="chengyu"
                        selected={this.state.selectedTab === 'chengyu'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'chengyu',
                            });
                        }}
                    >
                        <Chengyu history={this.props.history}/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        selectedIcon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        title="诗词"
                        key="shici"
                        selected={this.state.selectedTab === 'shici'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shici',
                            });
                        }}
                    >
                        <Shici history={this.props.history}/>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        selectedIcon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-book"></i>}
                        title="我的"
                        key="wode"
                        selected={this.state.selectedTab === 'wode'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'wode',
                            });
                        }}
                    >
                        <Wode history={this.props.history}/>
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
