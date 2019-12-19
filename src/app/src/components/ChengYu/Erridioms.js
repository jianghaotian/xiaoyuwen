import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon,Toast} from 'antd-mobile';
import { cyAudioUrl } from '../../request/url';
import "../../css/ChengYu/err.css"
export default class Guessidioms extends Component {
    constructor(){
        super();
        this.state={
            chengyu:"",
            errwords:[],
            arr: [],
            num: 1,
            max: 1,
            audio:""
        }
    }
	componentDidMount() {
        this.getTi();
    }
    getTi = () => {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });
        this.$api.get_cyycz({grade: this.$store.getState().users.grade || 1, index: this.state.num - 1}).then(res => {
			Toast.hide();
			
			let arr = (res.data.data.chengyu).split("");

            this.setState({
				chengyu: res.data.data.chengyu,
				errwords: res.data.data.errwords,
				arr: arr,
                max: res.data.data.max,
                audio: cyAudioUrl + res.data.data.audio,
            });
        });
    }
	shoucang = () => {
        if (this.state.shoucangClass == "icon-xingxing black") {
            this.setState({
                shoucangClass: "icon-xingxing1 yello"
            })
        } else {
            this.setState({
                shoucangClass: "icon-xingxing black"
            })
        }
    }
    minus = () => {
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }, () => {this.getTi()})
        }
    }
    adds = () => {
        if (this.state.num < this.state.max) {
            this.setState({
                num: this.state.num + 1
            }, () => {this.getTi()})
        }
    }
    play = () => {
        this.au.play();
    }
    render() {
        return (
            <div>
                <audio src={this.state.audio} preload="auto" ref={child => this.au = child}></audio>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>} style={{backgroundColor:"#617ca6"}}>成 语 易 错 字</NavBar>
                <div className="idiomerrbody"> 
                    
                    <div className="idiomerrcon">
                        <div>
                            <div className='sm-box'>
                                <div className='sm-textBox'>
                                    第 <span>{this.state.num}</span><span> / </span><span>{this.state.max}</span> 个
                                </div>
                            </div>
                    		<div onClick={this.shoucang} className={"iconfont " + this.state.shoucangClass}></div>
                            <div className="errcon">
                                {/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div> */}
                                {/* <div className="erridiom">{this.props.state.chengyu}</div> */}
                                <div className="erridiom">
                                    {
                                        this.state.arr.map((item,index)=>{
                                            var str='black';
                                            this.state.errwords.map((item1,index1)=>{
                                                // console.log(item,item1,index)
                                                if(item==item1){
                                                    str='red';
                                                }
                                                
                                            });
                                            return <span key={index} style={{color:str}}>{item}</span>
                                        })
                                    }
                                </div>
                                
                                <i className="iconfont icon-laba1" style={{fontSize:22,color:"#617ca6",marginTop:"20%",display:'block'}} onClick={this.play}></i>
                                {(this.state.errwords).map((item,index)=>(
                                    <div key={index} className="errword">{item}</div>
                                ))}
                                <div className="outfeiji">
									<img className="feiji" src={require("../../images/feiji1.png")}></img>
								</div>
                            </div>
                        </div>
                    </div>
               
					<div className="idiomsleft" onClick={this.minus}><i className="iconfont icon-ico_leftarrow"></i></div>
                	<div className="idiomsright" onClick={this.adds}><i className="iconfont icon-ico_leftarrow"></i></div>
            </div>
        </div>
        )
    }
}
