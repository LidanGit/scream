import React,{Component} from 'react'
import axios from 'axios'
class Inner extends Component{
	render(){
		return (
			<div>
				bbbbb
				{this.props.children}
			</div>
			)
	}
	componentDidMount(){
		axios.get(`/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=${new Date().getTime()}`).then(res=>{
			console.log(res.data);
		})
	}
}
export default Inner;