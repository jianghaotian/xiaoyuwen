import React, { Component } from 'react';
import Grade from '../Grade';
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
                <Grade num={this.state.num}/>
                <div style={{minHeight:'53rem',marginTop:'5%',marginBottom:20}}>
                    {
                        this.state.answer.map((value, index) => {
                            if (value.flag) {
                                return (
                                    <div key={index}>
                                        <div className='sc-listBox'>
                                            <span className="sc-text">{index + 1}.{value.show}</span>
                                            <i className={'iconfont icon-zhengque2 sc-panduandui'}></i>
                                        </div>
                                        <div className='sc-backtrue'>答对啦！</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index}>
                                        <div className='sc-listBox'>
                                            <span className="sc-text">{index + 1}.{value.show}</span>
                                            <i className={'iconfont icon-cuowu2 sc-panduancuo'}></i>
                                        </div>
                                        <div className='sc-backerr'>答案是:{value.ans}</div>
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
