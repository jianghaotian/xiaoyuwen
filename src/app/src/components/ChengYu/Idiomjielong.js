import React, { Component } from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom"
import {NavBar,Icon, Toast} from 'antd-mobile';
import "../../css/ChengYu/jielong.css"

export default class idiomjielong extends Component {
	constructor() {
		super();
		this.content = {
			question: [
				["#", "#", "#", "#", "百", "#"],
				["#", "走", "", "观", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "", "#", "", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
			choose: ["放", "马", "齐", "乘", "花", "到", "景", "成"],
			answer: [
				["#", "#", "#", "#", "百", "#"],
				["#", "走", "马", "观", "花", "#"],
				["#", "#", "到", "#", "齐", "#"],
				["#", "#", "成", "#", "放", "#"],
				["#", "#", "功", "#", "#", "#"],
				["#", "#", "#", "#", "#", "#"]
			],
		}
		this.state = {
			num: 1,
			next:"下一题",
			content: {
				question: [
					["#", "#", "#", "#", "百", "#"],
					["#", "走", "", "观", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "", "#", "", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
				choose: ["放", "马", "齐", "乘", "花", "到", "景", "成"],
				answer: [
					["#", "#", "#", "#", "百", "#"],
					["#", "走", "马", "观", "花", "#"],
					["#", "#", "到", "#", "齐", "#"],
					["#", "#", "成", "#", "放", "#"],
					["#", "#", "功", "#", "#", "#"],
					["#", "#", "#", "#", "#", "#"]
				],
			}
		}
		this.idArr = [];
		this.takeArr = ["", ""];
		this.count = 0;
		this.statu = false;
		this.pro = "";
		//存入了空白格的id
		for (var i = 0; i < this.content.question.length; i++) {
			for (var j = 0; j < this.content.question[i].length; j++) {
				if (this.content.question[i][j] === "") {
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
				state.content.question[x][y] = this.takeArr[1];
			}
			this.takeArr[1] = '';
			return {
				content: state.content
			}
		})
	}
	adds = (e) => {
		for (var a = 0; a < this.content.answer.length; a++) {
			for (var b = 0; b < this.state.content.question.length; b++) {
				if (this.state.content.question[a][b] != this.content.answer[a][b]) {
					this.statu = true;
				}
			}
		}
		if (this.statu) {
			this.statu = false;
			
			Toast.info("太遗憾了，你答错了！😭",1,()=>{
				this.setState((state)=>{
						if(state.num==3){
								return{
										num:3
								}
						}
						return{
								num:++state.num
						}
				})
				if(this.state.num==3){
						this.setState({
								next:"下一关"
						})
				}
		}) 
		} else {
			this.statu = false;
			this.setState((state) => {
				Toast.info("恭喜你，答对啦！撒花🎉！！",1,()=>{
					this.setState((state)=>{
							if(state.num==3){
									return{
											num:3
									}
							}
							return{
									num:++state.num
							}
					})
					if(this.state.num==3){
							this.setState({
									next:"下一关"
							})
					}
			})
			});
		}
		
	}
	change = (e) => {
		e.target.className = (e.target.className === "iconfont icon-xingxing black") ? "iconfont icon-xingxing1 yello" : "iconfont icon-xingxing black"
	}
	render() {
		console.log(this.state.num);
		return (
			<div>
				<NavBar
					icon={<Icon type="left" onClick={()=>{this.props.history.push('/home/chengyu')}}/>}
					onLeftClick={() => console.log('onLeftClick')}
					style={{ backgroundColor: "#617ca6" }}
				>成 语 接 龙</NavBar>

				<div className="idiomjlbody">

					<div className="learnidiomcon">
						<div>
							<div className="orange">第<span> {this.state.num}</span><span> / </span><span>3 </span>个</div>
							{/* <div><img className="learnimg" src={require("../../images/playbackground.jpeg")} /></div> */}
							<div className="jielongcon">
								<div className="jlcode">
									<div className="jlquestion" ref="question">
										{
											this.state.content.question.map((item, index) => (
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
										this.content.choose.map((item, index) => {
											return <div id={"f" + index} onClick={this.show} draggable="true" className="choosecode">{item}</div>
										})
									}
								</div>
							</div>
						</div>
					</div>
					<div className="jloutsubmit">
								<button onClick={this.adds} class="submit">{this.state.next}</button>
					</div>
				</div>
			</div>
		)
	}
}
