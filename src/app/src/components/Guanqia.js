import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'antd-mobile';
import '../css/guanqia.css';
const PlaceHolder = ({ className = '', ...restProps }) => {
	let { n, guanqia } = restProps;
	let img = '';
	let [color1, color2, color3] = '';
	for (var i = 0; i < guanqia.length; ++i) {
		if (guanqia[i].nth === n) {
			img = "dnone";
			if (guanqia[i].num === 1) {
				color1 = "color1";
			} else if (guanqia[i].num === 2) {
				color1 = "color1";
				color2 = "color1";
			} else if (guanqia[i].num === 3) {
				color1 = "color1";
				color2 = "color1";
				color3 = "color1";
			}
		}
	}
	return (
		<div className={`${className} placeholder`}>
			<span>{n++}</span>
			<img src={require("../images/suo1.png")} className={img} alt="" />
			<div className={"grade"}>
				<span className={`iconfont icon-xingxing1 spanw ${color1}`}></span>
				<span className={`iconfont icon-xingxing1 spanw ${color2}`}></span>
				<span className={`iconfont icon-xingxing1 spanw ${color3}`}></span>
			</div>
		</div>
	)
};
export default class Guanqia extends Component {
	constructor(props) {
		super(props);
		this.state = {
			guanqia: [{ nth: 1, num: 3 }, { nth: 2, num: 0 }]
		}
	}
	changeProps = (obj) => {
		if (obj.num === 3) {
			this.setState((state) => {
				var nextobj = {
					nth: parseInt(obj.nth),
					num: 0
				}
				state.guanqia.push(obj);
				state.guanqia.push(nextobj);
				return {
					guanqia: state.guanqia
				}
			})
		} else {
			this.setState((state) => {
				state.guanqia.push(obj);
				return {
					guanqia: state.guanqia
				}
			})
		}
	}
	render() {
		let n = 1;
		return (
			<div className="guanqiaback">
				<div className="flex-container">
					{
						[[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]].map((item, index) => {
							return (
								<Flex justify="center" key={index}>
									{
										item.map(item1 => {
											return (
												// <Link to={`/${this.props.pathname}/${n}`}><PlaceHolder className="inline" n={n++} guanqia={this.state.guanqia} change={this.changeProps} key={(index++) * 0.3} /></Link>
												<PlaceHolder className="inline" n={n++} guanqia={this.state.guanqia} change={this.changeProps} key={(index++) * 0.3} />
											)
										})
									}
								</Flex>
							)
						})
					}
				</div>
			</div>

		)
	}
}
