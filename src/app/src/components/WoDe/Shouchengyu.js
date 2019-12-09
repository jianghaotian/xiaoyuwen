import React, { Component } from 'react';
import { Tabs,NavBar,Icon,Flex } from 'antd-mobile';
import '../../css/WoDe/Shoupinyin.css';

const tabs = [
    { title: '学成语', sub: '1' },
    { title: '成语易错字', sub: '2' },
  ];

export default class Shoupinyin extends Component {
    render() {
        return (
            <div>
                {/* <div className="wode_back"></div> */}
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" onClick={()=>{this.props.history.push('/wode/shoucang')}}/>}
                    style={{background:'#617ca6',color:'#fff',height:'55px'}}
                    >成 语 收 藏
                </NavBar>
                <Tabs tabs={tabs} 
                    tabBarUnderlineStyle={{borderBottom:'1.5px solid #617ca6'}}
                    tabBarActiveTextColor='#617ca6'
                    tabBarInactiveTextColor='#232323'
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div className='spy_container'>
                        <ul className='list'>
                            <li>杯水车薪<i className={'iconfont icon-xingxing spy_i'}></i></li>
                            <li>一毛不拔<i className={'iconfont icon-xingxing spy_i'}></i></li>
                        </ul>
                        <div style={{height:'1rem'}}></div>
                    </div>
                    <div className='spy_container'>
                        <ul className='list'>
                            <li>一毛不拔<i className={'iconfont icon-xingxing spy_i'}></i></li>
                            <li>走马观花<i className={'iconfont icon-xingxing spy_i'}></i></li>
                        </ul>
                        <div style={{height:'1rem'}}></div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
