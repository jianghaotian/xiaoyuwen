import React, { Component } from 'react'
import { NavBar, Icon, Toast } from 'antd-mobile';
import '../../css/WoDe/Xuexijindu.css';

export default class Xuexijindu extends Component {
    constructor() {
        super();
        this.state={
            data: [],
        }
    }
    showName = (py) => {
        if (py == 'bcsj') {
            return '补充诗句';
        } else if (py == 'cyjl') {
            return '成语接龙';
        } else if (py == 'ccy') {
            return '猜成语';
        } else if (py == 'kzsy') {
            return '看字识音';
        } else if (py == 'tyxz') {
            return '听音选字';
        } else {
            return '';
        }
    }
    showTime = (py) => {
        var d = new Date(py);
        var year = d.getFullYear();
        var month = change(d.getMonth()+1);
        var day = change(d.getDate());
        var hour = change(d.getHours());
        var minute = change(d.getMinutes());
        var second = change(d.getSeconds());
        function change(t){
            if (t < 10) {
                return "0" + t;
            } else {
                return t;
            }
        }
        var time = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        return time;
    }
    showURL = (type, time) => {
        let url = '';
        if (type == 'bcsj') {
            url = '/shici/buchong/grade/' + time;
        } else if (type == 'cyjl') {
            url = '/chengyu/jielong/grade/' + time;
        } else if (type == 'ccy') {
            url = '/chengyu/cai/grade/' + time;
        } else if (type == 'kzsy') {
            url = '/pinyin/kanzi/grade/' + time;
        } else if (type == 'tyxz') {
            url = '/pinyin/tingyin/grade/' + time;
        } else {
            return '';
        }
        this.props.history.push(url);
    }
    componentDidMount() {
        this.$api.get_chengji().then(res => {
            if (res.data.status === 0) {
                // console.log(res);

                this.setState({
                    data: res.data.data.reverse() || []
                })
            } else {
                Toast.fail('加载失败', 1);
            }
        });
    }
    render() {
        return (
            <div>
                <div className="wode_back"></div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/wode')}}/>} style={{background:'#617ca6',color:'#fff'}}>成 绩 单</NavBar>
                <div style={{minHeight:'5rem', marginBottom:'5%'}}>
                {
                    this.state.data.length == 0 ? <div style={{textAlign: 'center'}}><div style={{height:'50vh',lineHeight:'50vh',fontSize:'30px'}}>没有成绩记录!</div></div> : ''
                }
                    {
                        this.state.data.map(value => (
                            <div className="xxjd_box a_click" key={value.Qid} onClick={() => {this.showURL(value.Qtype, value.Qday)}}>
                                <div>
                                    <span className="xxjd_text">{this.showName(value.Qtype)}</span>
                                    <span className="xxjd-time">{this.showTime(value.Qday)}</span>
                                </div>
                                <div className="xxjd_text_l">
                                    <span className="scoretext">分数:</span>
                                    <span className="score">{value.Qscore * 10}</span>
                                    <i className={'iconfont icon-youjiantou cj-jiantou'}></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
