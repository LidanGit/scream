import React,{Component} from 'react'
import Inner from '../../components/inner/inner.js'
import Inner2 from '../inner/inner2.js'
import Inner3 from '../inner/inner3.js'
import Inner4 from '../inner/inner4.js'
import css from './index.module.scss'
import axios from 'axios'
import {connect} from 'react-redux'
import {Switch,Route} from 'react-router-dom'
class Index extends Component{
	constructor(props){
		super(props);
		this.state = {
			is:1
		}
	}
	render(){
		return (
			<div id={css.index}>
				<header>
				<div className={css.div1}>
					<div className={css.div2}>
						<div className={css.search}></div>
						<input type="text"/>
					</div>
				</div>
				<ul>
					<li onClick={()=>{
						this.setState({
							is:1
						})
					}} key="1" className='focus'>推荐</li>
					<li onClick={()=>{
						this.setState({
							is:10005
						})
					}} key="10005">家具</li>
					<li onClick={()=>{
						this.setState({
							is:10006
						})
					}} key="10006">家居</li>
					<li onClick={()=>{
						this.setState({
							is:10010
						})
					}} key="10010">活动</li>
				</ul>
				</header>
				<section>
					
					{
						this.handle(this.state.is)
					}
				</section>
			</div>
			)
	}
	handle(tableId,evt){
		// this.props.handleHeader(tableId);
		// console.log(evt.target);
		// evt.target.className = 'focus';
		switch(tableId){
			case 1:
				return <Inner></Inner>;
			case 10005:
				return <Inner2></Inner2>;
			case 10006:
				return <Inner3></Inner3>;
			case 10010:
				return <Inner4></Inner4>;
			default :
			return <Inner></Inner>;
		}
	}
	componentDidMount(){
		// axios.get(`/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=${new Date().getTime()}`).then(res=>{
		// 	console.log(res.data.data.modules);
		// 	this.setState({
		// 		listdata:res.data.data.modules
		// 	})
		// })
	}
}
export default Index;