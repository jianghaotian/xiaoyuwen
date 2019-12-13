import React, { Component } from 'react';
import Grade from '../Grade';
import '../../css/ShiCi/ShiciGrade.css'


export default class ShiciGrade extends Component {
    render() {
        return (
            <div>
                <div className="grade-back"></div>
                <Grade />
                <div style={{minHeight:'40rem'}}>
                    <div className='sc-listBox'>
                        <span className="sc-text">1.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">2.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-cuowu2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backerr'>答案是:床前明月光，疑是地上霜</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">3.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">4.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-cuowu2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backerr'>答案是:床前明月光，疑是地上霜</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">5.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">6.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-cuowu2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backerr'>答案是:床前明月光，疑是地上霜。少时诵诗书。双双双双是。</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">7.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">8.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">9.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                    <div className='sc-listBox'>
                        <span className="sc-text">10.床前明月光，疑是地上霜</span>
                        <i className={'iconfont icon-zhengque2 sc-panduan'}></i>
                    </div>
                    <div className='sc-backtrue'>答对啦！</div>
                </div>
            </div>
        )
    }
}
