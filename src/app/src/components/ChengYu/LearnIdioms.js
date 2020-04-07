import React, { Component } from 'react'
import {NavBar,SearchBar,TextareaItem,Icon, Toast} from 'antd-mobile';
import { cyAudioUrl } from '../../request/url';
import "../../css/ChengYu/xcy.css"

export default class LearnIdioms extends Component {
    constructor(){
        super();
        this.state={
            shoucangClass: 'icon-xingxing black',
            num: 1,
            max: 1,
            chengyu: "",
            pinyin:"",
            shiyi: "",
            liju: "",
            nearword:"",
            autoword:"",
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
        this.$api.get_xuechengyu({grade: this.$store.getState().users.grade || 1, index: this.state.num - 1}).then(res => {
            Toast.hide();
            this.setState({
                chengyu: res.data.data.main.name,
                shiyi: res.data.data.main.mean,
                pinyin: res.data.data.main.pinyin,
                liju: res.data.data.main.example,
                nearword: res.data.data.main.nearword,
                autoword: res.data.data.main.autoword,
                max: res.data.data.num,
                audio: cyAudioUrl + res.data.data.main.audio,
            });
        });
    }
    play = () => {
        this.au.play();
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
    render() {
        return (
            <div>
                <audio src={this.state.audio} preload="auto" ref={child => this.au = child}></audio>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>} style={{backgroundColor:"#617ca6"}}>学 成 语</NavBar>
                
                <div className="learnidiombody"> 
                    
                    <div className="learnidiomcon">
                        {/* <SearchBar
                            placeholder="查找"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            onChange={this.onChange}
                            style={{height:"2rem"}}
                        /> */}
                        <div>
                            <div className='sm-box'>
                                <div className='sm-textBox'>
                                    第 <span>{this.state.num}</span><span> / </span><span>{this.state.max}</span> 个
                                </div>
                            </div>
                            <div onClick={this.shoucang} className={"iconfont " + this.state.shoucangClass}></div>
                            <div className="idiomcon">
                                {/* <div><img className="learnimg" src={require("../../../images/learnbackground.jpg") }/></div> */}
                                <div className="whiteline">
                                    <span className="special">成语: </span>
                                    <span className="theidiom">{this.state.chengyu}</span>
                                    <i className="iconfont icon-laba1" style={{fontSize:22,color:"#617ca6",marginLeft:"10%"}} onClick={this.play}></i>
                                </div>
                                <div className="whiteline"><span className="special">拼音: </span>{this.state.pinyin}</div>
                                <div className="whiteline"><span className="special">释义: </span>{this.state.shiyi}</div>
                                <div className="whiteline"><span className="special">例句: </span>{this.state.liju}</div>
                                <div className="whiteline"><span className="special">近义词: </span>{this.state.nearword}</div>
                                <div className="whiteline"><span className="special">反义词: </span>{this.state.autoword}</div>
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
