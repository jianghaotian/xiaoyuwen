import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile';

import '../../css/PinYin/tygrade.css'

export default class Kzgrade extends Component {
    constructor(props){
        super(props);
        this.state={
            score: 0,
            data: []
        }
    }
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({
                score: this.props.location.state.score,
                data: this.props.location.state.data
            });
        } else {
            this.$api.get_kzsy_grade({time: this.props.match.params.id}).then(res => {
                let { score, data } = res.data.data;
                this.setState({
                    score: score,
                    data: data                
                });
            });
        }
    }
    render() {
        return (
            <div>
                <div className="ty-grade-back"></div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/pinyin')}} />} style={{backgroundColor:"#617ca6",position:"fixed",width:"100%",zIndex:"10"}}>看 字 识 音</NavBar>
                <div className="ty1">
                    <img className="ty2" src={require('../../images/word3.PNG')} />
                    <div className="ty3">
                        <div className="ty4">总分：</div>
                        <img  src={require('../../images/num'+this.state.score+'.PNG') } className="ty5" />
                    </div>
                </div>
                <div style={{minHeight:'53rem',marginTop:'5%',marginBottom:20}}>
                    {
                        this.state.data.map((item,index)=>{
                            if(item.status){
                                return(
                                    <div key={index}>
                                        <div className='ty-listBox'>
                                            <span className="ty-text">{(index+1)+'.  '+item.write.one+" "+item.write.two}</span>
                                            <i className={'iconfont icon-zhengque2 ty-panduan-dui'}></i>
                                        </div>
                                        <div className='ty-backtrue'>答对啦！</div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div key={index}>
                                        <div className='ty-listBox'>
                                            <span className="ty-text">{(index+1)+'.  '+item.write.one+" "+item.write.two}</span>
                                            <i className={'iconfont icon-cuowu2 ty-panduan-cuo'}></i>
                                        </div>
                                        <div className='ty-backerr'>正确答案:  <span>{item.answer.one+" "+item.answer.two}</span><span>（{item.word}）</span></div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}
