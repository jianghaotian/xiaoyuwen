import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Pinyin from './PinYin/Pinyin';
import Chengyu from './ChengYu/Chengyu';
import Shici from './ShiCi/Shici';
import Wode from './WoDe/Wode';


export default class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.match.params.tab || 'pinyin'
        };
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
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
