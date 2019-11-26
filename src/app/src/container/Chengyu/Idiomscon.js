import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon} from 'antd-mobile';
export default class Idiomscon extends Component {
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
                        <div className="orange">第<span> 1</span><span> / </span><span>100 </span>个</div>
                        <div className="iconfont icon-xingxing" style={{fontSize:22,marginLeft:"90%"}}></div>
                        <div className="idiomcon">
                            <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div>
                            <div><span>成语: </span><span>{this.props.content.chengyu}</span><span className="iconfont icon-laba1" style={{fontSize:22,color:"#617ca6",marginLeft:"10%"}}></span></div>
                            <div><span>释义: </span>{this.props.content.shiyi}</div>
                            <div><span>比喻: </span>{this.props.content.biyu}</div>
                            <div><span>例句: </span>{this.props.content.liju}</div>
                            <img src={this.props.content.image}/>
                            <textarea value={this.props.content.story}></textarea>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
