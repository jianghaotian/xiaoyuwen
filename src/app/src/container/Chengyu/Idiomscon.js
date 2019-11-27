import React, { Component } from 'react'
export default class Idiomscon extends Component {
    change=(e)=>{
        e.target.className=(e.target.className=="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    render() {
        return (
            <div>
                <div className="orange">第<span> {this.props.num}</span><span> / </span><span>100 </span>个</div>
                <div onClick={this.change} className="iconfont icon-xingxing black"></div>
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
        )
    }
}
