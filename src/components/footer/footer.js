import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import css from './footer.module.scss'
class Footer extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return (
			<div id={css.footer}>
				<ul>
				  <li><NavLink to="/pages">首页</NavLink></li>
				  <li><NavLink to="/category">分类</NavLink></li>
				  <li><NavLink to="/list">购物车</NavLink></li>
				  <li><NavLink to="/message">消息</NavLink></li>
				  <li><NavLink to="/user">我的</NavLink></li>
				</ul>
			</div>
			)
	}
}
export default Footer;