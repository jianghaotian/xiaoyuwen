import React, { Component } from 'react'
import '../../css/Pinyin/pinyin.css';
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
export default class Shengmu extends Component {
    
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left" style={{fontSize:22}}/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundColor:"#617ca6"}}
                    >声母</NavBar>
                <div className="learnidiombody"> 
                    <div className="learnidiomcon">
                        <SearchBar
                            placeholder="查找"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            onChange={this.onChange}
                            style={{height:"3%"}}
                        />
                        <div className="orange">第<span> 1</span><span> / </span><span>100 </span>个</div>
                        <div className="iconfont icon-xingxing" style={{fontSize:22,marginLeft:"90%"}}></div>
                        <div className="idiomcon">
                            <div><span>成语: </span><span>杯水车薪</span><span className="iconfont icon-laba1" style={{fontSize:22,color:"#617ca6"}}></span></div>
                            <div><span>释义: </span>阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                            <div><span>比喻: </span>啊啊啊啊啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
                            <div><span>例句: </span>呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃呃</div>
                            
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
