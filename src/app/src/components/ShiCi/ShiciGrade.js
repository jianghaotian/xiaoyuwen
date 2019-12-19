import React, { Component } from 'react';
import Grade from '../Grade';
import {NavBar,Icon} from 'antd-mobile';
import '../../css/ShiCi/ShiciGrade.css'

export default class ShiciGrade extends Component {
    constructor(){
        super();
        this.state={
            num: 0,
            answer: []
        }
    }
    componentDidMount() {
        this.$api.get_bcsj_grade({time: this.props.match.params.id}).then(res => {
            let { answer, grade } = res.data.data;

            this.setState({
                num: grade,
                answer: answer                
            });
        });

    }
    render() {
        return (
            <div>
                <div className="grade-back"></div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.goBack()}} />} style={{backgroundColor:"#617ca6",position:"fixed",width:"100%",zIndex:"10"}}>补 充 诗 句</NavBar>
                {/* <Grade num={this.state.num}/> */}
                <div className="ty1">
                    <img className="ty2" src={require('../../images/word3.PNG')} />
                    <div className="ty3">
                        <div className="ty4">总分：</div>
                        <img  src={require('../../images/num'+this.state.num+'.PNG') } className="ty5" />
                    </div>
                </div>
                <div style={{minHeight:'53rem',marginTop:'5%',marginBottom:20}}>
                    {
                        this.state.answer.map((value, index) => {
                            if (value.flag) {
                                return (
                                    <div key={index}>
                                        <div className='sc-listBox'>
                                            <span className="sc-text" style={value.show.length > 13 ? {fontSize: '14px'} : {}}>{index + 1}.{value.show}</span>
                                            <i className={'iconfont icon-zhengque2 sc-panduandui'}></i>
                                        </div>
                                        <div className='sc-backtrue'>答对啦！</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <div className='sc-listBox'>
                                            <span className="sc-text" style={value.show.length > 13 ? {fontSize: '14px'} : {}}>{index + 1}.{value.show}</span>
                                            <i className={'iconfont icon-cuowu2 sc-panduancuo'}></i>
                                        </div>
                                        <div className='sc-backerr'>正确答案: <span>{value.ans}</span></div>
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
