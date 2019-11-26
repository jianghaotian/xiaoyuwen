import React, { Component } from 'react'
import Idiomscon from './Idiomscon';
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
import "../../css/xcy.css"
export default class LearnIdioms extends Component {
    constructor(){
        super();
        this.content={
            chengyu:"杯水车薪",
            shiyi:"啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
            biyu:"啊啊啊啊啊啊啊啊啊阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
            liju:"哒哒哒哒哒哒多多多多多多多多多多多多多多多多多多多多多多多多多多多多多",
            image:"",
            story:'从前，有个樵夫砍柴回家，天气炎热，他推了满满的一车柴草来到一家茶馆门前。在屋里刚坐下喝了一会茶，就听见外面有人高喊:"不好了，救火啊!柴车着火了!"樵夫立即起身，端起茶杯就冲了出去。他把茶杯里的水向燃烧的柴车泼去，然后再跑回去，盛了满满一杯水，想要灭火，但再跑出去时，柴草已化成灰烬'
        }
        this.state={
            num:1
        }
    }
    minus=(e)=>{
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
    adds=()=>{
        
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
                    >学 成 语</NavBar>
                
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
                            style={{height:"2rem"}}
                        />
                    <Idiomscon content={this.content} num={this.state.num}/>
                </div>
               
               <Router>
                   <div className="idiomsleft" ><Link onClick={this.minus} className="iconfont icon-ico_leftarrow"></Link></div>
                   <div className="idiomsright" onClick={this.adds}><Link  className="iconfont icon-ico_leftarrow"></Link></div>
               </Router>
               
            </div>
            </div>
        )
    }
}
