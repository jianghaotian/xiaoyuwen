import React, { Component } from 'react';
import '../../css/PinYin/pinyin.css';
import {NavBar,SearchBar,Icon,Toast} from 'antd-mobile';
import { pyImgUrl, pyAudioUrl } from '../../request/url';

export default class Shengmu extends Component {
    constructor() {
        super();
        this.state = {
            tittle: '',
            shoucangClass: 'icon-xingxing black',
            num: 1,
            max: 1,
            yin: '',
            diao: '',
            zi: '',
            ci: [],
            img: '',
            audio: ''
        }
    }
    componentDidMount() {
        if (this.props.match.params.flag == 'shengmu') {
            this.setState({tittle: '声 母'})
        } else if (this.props.match.params.flag == 'yunmu') {
            this.setState({tittle: '韵 母'})
        } else if (this.props.match.params.flag == 'zhengtiyin') {
            this.setState({tittle: '整 体 音'})
        }
        this.getTi();
    }
    getTi = () => {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });
        this.$api.get_xuepinyin({flag: this.props.match.params.flag, index: this.state.num - 1}).then(res => {
            Toast.hide();
            this.setState({
                yin: res.data.data.main.name,
                diao: res.data.data.main.spell,
                zi: res.data.data.main.word,
                ci: res.data.data.main.example,
                audio: res.data.data.main.audio,
                img: res.data.data.main.image,
                max: res.data.data.num
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
    render() {
        return (
            <div className="s1">
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}}/>} style={{backgroundColor:"#617ca6"}}>{this.state.tittle}</NavBar>
                <div className="s2">
                    {/* <SearchBar
                        placeholder="查找"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        onChange={this.onChange}
                        style={{height:"2rem",marginTop:'5%'}}
                    /> */}
                    <div className='sm-box'>
                        <div className='sm-textBox'>
                            第 <span>{this.state.num}</span><span> / </span><span>{this.state.max}</span> 个
                        </div>
                    </div>
                    <div onClick={this.shoucang} className={"iconfont " + this.state.shoucangClass}></div>
                    <div className="s3">
                        <div className="s4">{this.state.yin}</div>
                        <div className='s5'>
                            <div className="iconfont icon-laba1 s6"></div>
                            <div className="s7">{this.state.diao}</div>
                            <div className="s8">{this.state.zi}</div>
                        </div>
                        <div className="s9">
                            <div className="s11">{this.state.ci[0]}</div>
                            <div className="s11">{this.state.ci[1]}</div>
                        </div>
                    </div>
                    
                    <div className="s10">
                        <img src={pyImgUrl + this.state.img}/>
                    </div>
                </div>
               
                <div className="idiomsleft" onClick={this.minus}><i className="iconfont icon-ico_leftarrow"></i></div>
                <div className="idiomsright" onClick={this.adds}><i className="iconfont icon-ico_leftarrow"></i></div>

            </div>
        )
    }
}
