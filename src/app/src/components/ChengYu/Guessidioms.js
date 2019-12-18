import React, { Component } from 'react'
import {NavBar,Icon,Toast,Button} from 'antd-mobile';
import "../../css/ChengYu/guess.css"

export default class Guessidioms extends Component {
    constructor(){
        super();
        this.state={
            num:1,
            next:"下一题",
            jlsubmitFront: 'jlsubmit-front',
            front: '上一题',
            all: [{description:[],words:[]}],
        }
        this.no=0;
        this.objArr=[];
        this.arr=[];
        this.answerArr={1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{}};
        this.bool=false;
        this.status=false;
        this.score=0;
    }
    minus=(e)=>{
        this.setState((state)=>{
            if(--state.num<1){
                return{
                    num:1,
                    jlsubmitFront:'jlsubmit-front'
                }
            };
            this.borderclear();
            this.judge(this.state.num);
            return{
                num:state.num,
                next:"下一题"
            }
        })
    }
    adds=(e)=>{
        this.objArr=[];
        this.no=0;
        this.setState((state)=>{
            if(state.num===10){
                this.submit();
            }
            if(state.num===9){
                this.setState({
                    next:"提交"
                })
            }
            if(++state.num>10){
                return{
                    num:10
                    // next:"提交"
                }
            };
            console.log("state.num:"+state.num)
            this.borderclear();
            this.judge(state.num);
            return{
                num:state.num,
                next:"下一题",
                jlsubmitFront:'jlsubmit-front1'
            }
        })    
    }
    judge=(num)=>{
        console.log(num)
        if(Object.keys(this.answerArr[num]).length !== 0){
            this.arr.map((item,index)=>{
                if(this.answerArr[num][index+1] !== undefined){
                    console.log(num,this.answerArr[num][index+1]);
                   item.innerHTML= this.answerArr[num][index+1];
                   console.log(item); 
                }else{
                    item.innerHTML="";
                }
            })
        }else if(Object.keys(this.answerArr[num]).length === 0){
            this.arr.map((item,index)=>{
                item.innerHTML= "";
            })
        }    
    }
    borderclear=()=>{
        this.arr.map((item,index)=>{
            item.id="";
            item.className="guessone";
         })
    }
    change=(e)=>{
        e.target.className=(e.target.className==="iconfont icon-xingxing black")?"iconfont icon-xingxing1 yello":"iconfont icon-xingxing black"
    }
    clear=(num)=>{
        this.no=0;
        this.objArr=[];
        this.arr.map((item,index)=>{
            item.innerHTML=""
            item.id="";
            item.className="guessone"
        })
        for(var key in this.answerArr[num]){
            delete this.answerArr[num][key];
        }
    }
    getGid=(e)=>{
        this.answer="";
        var value=e.target.innerHTML;
        if(this.objArr.length<4){
            ++this.no;
            var obj={[this.no]:value}
            this.objArr.push(obj);
        }
        this.arr.map((item,index)=>{
            this.objArr.map((item1,index1)=>{
                item.id="";
                if(index === index1){
                    item.innerHTML = item1[index+1];
                    item.id="active"
                }
            })
        })
        for(var i=0;i<this.objArr.length;i++){
            this.answerArr[this.state.num][i+1]=this.objArr[i][i+1]
        }
        
    }
    submit=(e)=>{
        for(var i=0;i<this.state.all.length;i++){
            var str="";
            Object.keys(this.answerArr[i+1]).map(item=>{
                str+=this.answerArr[i+1][item]
                this.answerArr[i+1].str=str
            })
            if(str===this.state.all[i].answer){
                this.answerArr[i+1].status=true;
                this.score++;
                this.answerArr[i+1].answer=this.state.all[i].answer
            }
            else{
                this.answerArr[i+1].status=false;
                this.answerArr[i+1].answer=this.state.all[i].answer
            }
            console.log(str);
            console.log(this.state.all[i].answer);
            console.log(this.answerArr[i+1]);
        }
        console.log(this.answerArr,this.score);

        if (this.$store.getState().token.uid !== '' && this.$store.getState().token.token !== '' && this.$store.getState().users.phone !== '') {
            Toast.loading('正在判题...', 10, () => {
                Toast.offline('网络异常', 1, null, false);
            });
            this.$api.post_ccy({data:this.answerArr,score:this.score}).then(res => {
                Toast.hide();
                if (res.data.status === 0) {
                    this.props.history.push('/chengyu/cai/grade/' + res.data.data);
                } else {
                    Toast.offline('网络异常', 1, null, false);
                }
            })
        } else {
            Toast.info('当前未登录，不会存储答题信息', 1, null, false);
            this.props.history.push({pathname:'/chengyu/cai/grade',state:{data:this.answerArr,score:this.score}});
        }

    }
    componentDidMount(){
        Toast.loading('正在加载...', 10, () => {
            Toast.offline('网络异常', 1, null, false);
        });

        let grade = this.$store.getState().users.grade || 1;
        this.$api.get_ccy({grade: grade}).then(res => {
            Toast.hide();
            console.log(res);

            this.setState({
                all: res.data.data
            })
        });

        for(var i=0;i<this.refs.a.children.length;i++){
            this.arr[i]=this.refs.a.children[i]
        };
    }
    componentWillUpdate(){
        for(var i=0;i<this.refs.a.children.length;i++){
            this.arr[i]=this.refs.a.children[i]
        };
    }
    render() {
        return (
            <div>
                <NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>} style={{backgroundColor:"#617ca6"}}>猜 成 语</NavBar>
                
                <div className="guessidiombody"> 
                    
                    <div className="guessidiomcon">
                        <div>
                            <div className='sm-box'>
                            <div className='sm-textBox'>
                                第 <span>{this.state.num}</span><span> / </span><span>10</span> 个
                            </div>
                        </div>
                            {/* <div><img className="learnimg" src={require("../../../images/playbackground.jpeg") }/></div> */}
                            <div className="guesscon">
                                <div className="descrip">
                                    <textarea readOnly value={this.state.all[this.state.num-1].description}>
                                        
                                    </textarea>
                                    
                                </div>
                                <div className="answer">
                                    <div ref="a" style={{width:"60vw",height:"12vw"}}>
                                        {

                                            [1,2,3,4].map((item,index)=>(
                                                <div key={index} id={"a"+item} className="guessone">
                                                    
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                </div>
                                <div className="chooseguess">
                                    <div style={{width:"75vw"}}>
                                        {
                                            (this.state.all[this.state.num-1].words).map((item,index)=>(
                                                <div onClick={this.getGid} id={"g"+index} className="chooseone">
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="outsubmit">
                        <Button style={{width:'27vw',marginTop:'1%'}} onClick={this.minus} className={this.state.jlsubmitFront}>上一题</Button>
                        <button onClick={()=>this.clear(this.state.num)} className="submitguess" style={{display:"inline"}}>清空</button>
                        <Button style={{width:'27vw',marginTop:'1%'}} onClick={this.adds} className="jlsubmit-next">{this.state.next}</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}