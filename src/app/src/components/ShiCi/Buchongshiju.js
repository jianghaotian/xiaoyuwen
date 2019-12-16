import React, { Component } from 'react';
import { NavBar, Icon,Toast,Button } from 'antd-mobile';
import '../../css/ShiCi/Buchongshiju.css';

export default class Buchongshiju extends Component {
    constructor(){
        super();
        this.state={
            num: 1,
            scsubmitFront: 'scsubmit-front',
            answerArr: {},
            front: '上一题',
            next: "下一题",
            shang: '',
            xia: '',
            shangStyle: {borderBottom:'#fff 1px solid'},
            xiaStyle: {borderBottom:'#fff 1px solid'},
            choose: [],
            data: {}
            // 0为填下句
        }
    }
    componentDidMount() {
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        let grade = this.$store.getState().users.grade || 1;
        this.$api.get_buchongshiju({grade: grade}).then(res => {
            Toast.hide();
            console.log(res);

            this.setState({
                data: res.data.data
            }, () => {
                this.createQuestion();
            })
        });
    }
    getAnswer = (item) => {
        if(this.state.data[this.state.num].flag==0){
            this.setState({
                xia:item
            })
        }
        else{
            this.setState({
                shang:item
            })
        }
        let answer = {...this.state.answerArr};
        answer[this.state.num] = item;
        this.setState({
            answerArr:answer
        })
    }

    adds = () => {
        this.setState({
            scsubmitFront:'scsubmit-front1'
        })
        if(this.state.num == 9){
            this.setState({
                next:'提 交'
            })
        } else if (this.state.num < 10){
            this.setState({
                next:'下一题'
            })
        } else if (this.state.num == 10){
            Toast.loading('正在判题...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            let answer = {};
            for (var i = 1; i < 11; i++) {
                if (this.state.data[i].answer === this.state.answerArr[i]) {
                    let shang = '';
                    let xia = '';
                    if (this.state.data[i].flag == 0) {
                        shang = this.state.data[i].show;
                        xia = this.state.data[i].answer;
                    } else {
                        shang = this.state.data[i].answer;
                        xia = this.state.data[i].show;
                    }
                    answer[i] = {flag: 1, show: '' + shang + xia, ans: ''};
                } else {
                    let shang = '';
                    let xia = '';
                    let shangAns = '';
                    let xiaAns = '';
                    if (this.state.data[i].flag == 0) {
                        shang = this.state.data[i].show;
                        xia = this.state.data[i].answer;
                        shangAns = this.state.data[i].show;
                        xiaAns = this.state.answerArr[i];
                    } else {
                        shang = this.state.data[i].answer;
                        xia = this.state.data[i].show;
                        shangAns = this.state.answerArr[i];
                        xiaAns = this.state.data[i].show;
                    }
                    answer[i] = {flag: 0, show: '' + shang + xia, ans: '' + shangAns + xiaAns};
                }
            }
            console.log(answer);
            this.$api.post_buchongshiju({answer}).then(res => {
                
                
                console.log(res);

            })




        }
        if (this.state.num < 10) {
            this.setState({
                num: this.state.num + 1
            }, () => {this.createQuestion()})
        }
    }
    less = () => {
        if(this.state.num == 2){
            this.setState({
                scsubmitFront:'scsubmit-front'
            })
        }
        if (this.state.num <= 10){
            this.setState({
                next:'下一题'
            })
        }
        if (this.state.num > 1) {
            this.setState({
                num: this.state.num - 1
            }, () => {this.createQuestion()})
        }
    }
    createQuestion = () => {
        if (this.state.data[this.state.num].flag == 0) {
            this.setState({
                shang:this.state.data[this.state.num].show,
                xia:this.state.answerArr[this.state.num] || '',
                shangStyle:{borderBottom:'#fff 1px solid'},
                xiaStyle:{borderBottom:'rgb(0, 0, 0) 1px solid'}
            })
        } else {
            this.setState({
                shang:this.state.answerArr[this.state.num] || '',
                xia:this.state.data[this.state.num].show,
                shangStyle:{borderBottom:'rgb(0, 0, 0) 1px solid'},
                xiaStyle:{borderBottom:'#fff 1px solid'}
            })
        }
        this.setState({
            choose: this.state.data[this.state.num].choose
        })
    }

    render() {
        return (
            <div>
                <NavBar mode="dark" icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/shici')}}/>} style={{background:'#617ca6',color:'#fff'}}>补 充 诗 句</NavBar>
                <div className="bcsj_back"></div>
                <div className="bcsj_box">
                    <p><span>第 </span><span className="bcsj_text1"><span>{this.state.num}</span>/10</span><span> 个</span></p>
                    <div className="bcsj_poetry">
                        <div className="iconfont icon-tuding tuding"></div>
                        <div id="answer" className="bcsj_poetry_text" style={this.state.shangStyle}>{this.state.shang}</div>
                        <div id="answer" className="bcsj_poetry_text" style={this.state.xiaStyle}>{this.state.xia}</div>
                        <div style={{marginTop:'20%'}}>
                        {
                            (this.state.choose).map((item, index) => (
                                <div key={index} onClick={()=>{this.getAnswer(item)}} className="bcsj_option">{item}</div>
                            ))
                        }
                        </div>
                        <div className="scoutsubmit">
                            <Button onClick={this.less} className={this.state.scsubmitFront}>{this.state.front}</Button>
                            <Button onClick={this.adds} className="scsubmit-next">{this.state.next}</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
