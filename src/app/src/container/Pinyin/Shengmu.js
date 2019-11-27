import React, { Component } from 'react'
import '../../css/Pinyin/shengmu.css';
import Shengmucontent from "./Shengmucontent.js"
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
export default class Shengmu extends Component {
    constructor(){
        super();
        this.content={
            yin:'k',
            diao:'kē',
            zi:'蝌',
            ci:['蝌蚪','蝌蚪'],
            img:'shengmu.jpg'
        }
        this.state={
            num:1,
            favor:false
        }
    }
    left=(e)=>{
        this.setState((state)=>{
            if(state.num==1){
                return{
                    num:1
                }
            }
            return{
                num:--state.num
            }
        })
    }
    right=()=>{
        
        this.setState((state)=>{
            return{
                num:++state.num
            }
        })
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type="left"/>}
                    onLeftClick={() => console.log('onLeftClick')}
                    style={{backgroundColor:"#617ca6"}}
                    >声 母</NavBar>
                
                <div className="s1"> 
                    
                    <div className="s2">
                        <SearchBar
                            placeholder="查找"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            onChange={this.onChange}
                            style={{height:"2rem"}}
                        />
                    <Shengmucontent content={this.content} num={this.state.num}/>
                </div>
               
               <Router>
                   <div className="left" ><Link onClick={this.left} className="iconfont icon-ico_leftarrow"></Link></div>
                   <div className="right" onClick={this.right}><Link  className="iconfont icon-youjiantou"></Link></div>
               </Router>
               
            </div>
            </div>
        )
    }
}
