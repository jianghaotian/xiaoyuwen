import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile';
import '../../css/ChengYu/jlgrade.css'

export default class Jlgrade extends Component {
  constructor(props){
    super(props);
    this.state={
        score:this.props.location.state.score,
        data:this.props.location.state.data
    }
}
  render() {
    return (
      <div>
        <div>
                <div className="jlgradeback"></div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.goBack()}} />} style={{backgroundColor:"#617ca6",position:"fixed",width:"100%",zIndex:"10"}}>看 字 识 音</NavBar>
                <div className="jl1">
                    <img className="jl2" src={require('../../images/word3.PNG')} />
                    <div className="jl3">
                        <div className="jl4">总分：</div>
                        <img  src={require('../../images/num'+this.state.score+'.PNG') } className="ty5" />
                    </div>
                </div>
                <div style={{minHeight:'40rem'}}>
                    {
                        this.state.data.map((item,index)=>{
                            if(item.status){
                                return(
                                    <div key={index}>
                                        <div className='jl-listBox'>
                                        <div className="myanswer">
                                              {
                                                item.question.map((item, index) => (
                                                  (item).map((item2, index2) => {
                                                    if (item2 === "") {
                                                      return <div   className="answerwordcode">{item2}</div>
                                                    }
                                                    else if (item2 === "#") {
                                                      return <div  className="answernocode">{item2}</div>
                                                    }
                                                    else {
                                                      return <div  className="answerwordcode">{item2}</div>
                                                    }
                                                  })
                                                ))

                                              }
                                            </div>
                                            <i className={'iconfont icon-zhengque2 jl-panduan-dui'}></i>
                                        </div>
                                        <div className='jl-backtrue'>答对啦！</div>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div key={index}>
                                        <div className='jl-listBox'>
                                          <div className="myanswer">
                                              {
                                                item.question.map((item, index) => (
                                                  (item).map((item2, index2) => {
                                                    if (item2 === "") {
                                                      return <div   className="answerwordcode">{item2}</div>
                                                    }
                                                    else if (item2 === "#") {
                                                      return <div  className="answernocode">{item2}</div>
                                                    }
                                                    else {
                                                      return <div  className="answerwordcode">{item2}</div>
                                                    }
                                                  })
                                                ))

                                              }
                                            </div>
                                            <i className={'iconfont icon-cuowu2 jl-panduan-cuo'}></i>
                                        </div>
                                        <div className='jl-backerr'>正确答案:  </div>
                                        <div className="myanswer">
                                              {
                                                item.answer.map((item, index) => (
                                                  (item).map((item2, index2) => {
                                                    if (item2 === "") {
                                                      return <div   className="answerwordcode">{item2}</div>
                                                    }
                                                    else if (item2 === "#") {
                                                      return <div  className="answernocode">{item2}</div>
                                                    }
                                                    else {
                                                      return <div style={{color:'red'}}  className="answerwordcode">{item2}</div>
                                                    }
                                                  })
                                                ))

                                              }
                                            </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div> 
            </div>
      </div>
    )
  }
}
