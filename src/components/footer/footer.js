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
				<li><NavLink to="/pages"><img src="/home.png" alt=""/><span>首页</span></NavLink></li>
				<li><NavLink to="/category"><img src="/category.png" alt=""/><span>分类</span></NavLink></li>
				<li><NavLink to="/cart"><img src="/buy.png" alt=""/><span>购物车</span></NavLink></li>
				<li><NavLink to="/message"><img src="/message.png" alt=""/><span>消息</span></NavLink></li>
				<li><NavLink to="/user"><img src="/me.png" alt=""/><span>我的</span></NavLink></li>
				</ul>
			</div>
			)
	}
}
export default Footer;