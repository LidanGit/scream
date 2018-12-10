import React,{Component} from 'react'
import Inner from '../../components/inner/inner.js'
import css from './index.module.scss'
import axios from 'axios'
class Index extends Component{
	constructor(props){
		super(props);
		this.state = {
			listdata:[]
		}
	}
	render(){
		return (
			<div id={css.index}>
				<header>
				<ul>
					<li>推荐</li>
					<li>家具</li>
					<li>家居</li>
					<li>活动</li>
				</ul>
				</header>
				<section>
					<Inner>
						{this.state.listdata.map((item,index)=>{
						return	<li>
								{item.moduleId}
							</li>
						})}
					</Inner>
				</section>
			</div>
			)
	}
	componentDidMount(){
		axios.get(`/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=${new Date().getTime()}`).then(res=>{
			this.setState({
				listdata:res.data.data.modules
			})
		})
	}
}
export default Index;