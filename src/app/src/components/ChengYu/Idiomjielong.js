import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,Icon, Toast,Button} from 'antd-mobile';
import "../../css/ChengYu/jielong.css"

export default class idiomjielong extends Component {
	constructor() {
		super();
		this.content =[
			{
				question: [
					["一", "#", "#", "#", "百", "#"],
					["#", "走", "", "观", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
				choose: ["放", "马", "齐", "乘", "花", "到", "一", "成"],
				answer: [
					["一", "#", "#", "#", "百", "#"],
					["#", "走", "马", "观", "花", "#"],
					["#", "#", "到", "#", "齐", "#"],
					["#", "#", "成", "#", "放", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				]
			}, {
			question: [
				["二", "#", "#", "#", "百", "#"],
				["#", "走", "", "观", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
			choose: ["放", "马", "齐", "乘", "花", "到", "二", "成"],
			answer: [
				["二", "#", "#", "#", "百", "#"],
				["#", "走", "马", "观", "花", "#"],
				["#", "#", "到", "#", "齐", "#"],
				["#", "#", "成", "#", "放", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
		},
		{
			question: [
				["三", "#", "#", "#", "百", "#"],
				["#", "走", "", "观", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
			choose: ["放", "马", "齐", "乘", "花", "到", "三", "成"],
			answer: [
				["三", "#", "#", "#", "百", "#"],
				["#", "走", "马", "观", "花", "#"],
				["#", "#", "到", "#", "齐", "#"],
				["#", "#", "成", "#", "放", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
		}
		]
		this.state = {
			num: 1,
			scsubmitFront: 'jlsubmit-front',
			front: '上一题',
			next:"下一题",
			content: [
				{
					question: [
						["一", "#", "#", "#", "百", "#"],
						["#", "走", "", "观", "", "#"],
						["#", "#", "", "#", "", "#"],
						["#", "#", "", "#", "", "#"],
						["#", "#", "功", "#", "#", "#"],
						["#", "#", "#", "#", "#", "#"]
					],
					choose: ["放", "马", "齐", "乘", "花", "到", "一", "成"],
					answer: [
						["一", "#", "#", "#", "百", "#"],
						["#", "走", "马", "观", "花", "#"],
						["#", "#", "到", "#", "齐", "#"],
						["#", "#", "成", "#", "放", "#"],
						["#", "#", "功", "#", "#", "#"],
						["#", "#", "#", "#", "#", "#"]
					]
				}, {
				question: [
					["二", "#", "#", "#", "百", "#"],
					["#", "走", "", "观", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
				choose: ["放", "马", "齐", "乘", "花", "到", "二", "成"],
				answer: [
					["二", "#", "#", "#", "百", "#"],
					["#", "走", "马", "观", "花", "#"],
					["#", "#", "到", "#", "齐", "#"],
					["#", "#", "成", "#", "放", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
			},
			{
				question: [
					["三", "#", "#", "#", "百", "#"],
					["#", "走", "", "观", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
				choose: ["放", "马", "齐", "乘", "花", "到", "三", "成"],
				answer: [
					["三", "#", "#", "#", "百", "#"],
					["#", "走", "马", "观", "花", "#"],
					["#", "#", "到", "#", "齐", "#"],
					["#", "#", "成", "#", "放", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
			}
			]
		}
		this.idArr = [];
		this.takeArr = ["", ""];
		this.count = 0;
		this.statu = false;
		this.pro = "";
		//存入了空白格的id
		for (var i = 0; i < this.content[this.state.num-1].question.length; i++) {
			for (var j = 0; j < this.content[this.state.num-1].question[i].length; j++) {
				if (this.content[this.state.num-1].question[i][j] === "") {
					var str = i + "" + j;
					this.idArr.push(str);
				}
			}
		}
	}
	show = (e) => {
		this.count = 0;
		for (var i = 0; i < this.refs.question.children.length; ++i) {
			if (this.refs.question.children[i].className.indexOf('active') >= 0) {
				this.refs.question.children[i].classList.remove('active');
			}
		}
		if (this.idArr.includes(e.target.id)) {
			e.target.classList.add('active');
		}

		if (e.target.id.indexOf("f") !== -1) {
			var value = e.target.innerHTML;
			this.takeArr[1] = value;

		}
		this.pro = this.takeArr[0];
		if (e.target.id.indexOf("f") === -1) {
			this.takeArr[0] = e.target.id;
		}

		var x = parseInt(this.takeArr[0].split("")[0]);
		var y = parseInt(this.takeArr[0].split("")[1]);
		if (this.takeArr[0] === "") {
			Toast.info("请选择要填入汉字的位置");
			this.takeArr[1] = ""
			return;
		}
		this.setState((state) => {
			if (this.idArr.includes(this.takeArr[0])) {
				state.content[this.state.num-1].question[x][y] = this.takeArr[1];
			}
			this.takeArr[1] = '';
			return {
				content: state.content
			}
		})
		console.log(this.state.content,this.content)
	}
	minus=(e)=>{
		this.setState((state)=>{
				if(--state.num<1){
						return{
								num:1
						}
				};
				return{
						num:state.num,
						next:"下一题",
						scsubmitFront:'jlsubmit-front'
				}
		})
}
	adds=(e)=>{
		this.setState((state)=>{
				if(++state.num>10){
						return{
								num:10,
								next:"提交"
						}
				};
				return{
						num:state.num,
						next:"下一题",
						scsubmitFront:'jlsubmit-front1'
				}
		})    
}
	change = (e) => {
		e.target.className = (e.target.className === "iconfont icon-xingxing black") ? "iconfont icon-xingxing1 yello" : "iconfont icon-xingxing black"
	}
	render() {
		return (
			<div>
				<NavBar icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>} style={{ backgroundColor: "#617ca6" }}>成 语 接 龙</NavBar>

				<div className="idiomjlbody">

					<div className="idiomjlcon">
						<div>
							<div className='sm-box'>
							<div className='sm-textBox'>
								第 <span>{this.state.num}</span><span> / </span><span>3</span> 个
							</div>
                    	</div>
							{/* <div><img className="learnimg" src={require("../../../images/playbackground.jpeg")} /></div> */}
							<div className="jielongcon">
								<div className="jlcode">
									<div className="jlquestion" ref="question">
										{
											this.state.content[this.state.num-1].question.map((item, index) => (
												(item).map((item2, index2) => {
													if (item2 === "") {
														return <div id={index + "" + index2} onClick={this.show} className="wordcode">{item2}</div>
													}
													else if (item2 === "#") {
														return <div id={index + "" + index2} className="nocode">{item2}</div>
													}
													else {
														return <div id={index + "" + index2} onClick={this.show} className="wordcode">{item2}</div>
													}
												})
											))

										}
									</div>
								</div>
								<div className="answercode">
									{
										this.content[this.state.num-1].choose.map((item, index) => {
											return <div id={"f" + index} onClick={this.show} draggable="true" className="choosecode">{item}</div>
										})
									}
								</div>
							</div>
						</div>
					</div>
					<div className="jielongoutsubmit">
                        <Button onClick={this.minus} className={this.state.scsubmitFront}>{this.state.front}</Button>
                        <Button onClick={this.adds} className="jlsubmit-next">{this.state.next}</Button>
                    </div>
				</div>
			</div>
		)
	}
}
