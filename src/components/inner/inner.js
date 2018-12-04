import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
class Inner extends Component{
	constructor(props){
		super(props);
		this.state = {
			// datalist:[]
		}
	}
	render(){
		return (
			<div>
				{
					this.props.datalist.map((item,index)=>{
						return <li key={item.moduleId}>{item.moduleId}</li>
					})
				}
			</div>
			)
	}
	componentDidMount(){
		if(this.props.datalist.length===0){
			this.props.handleaxios();
			
		}
	}
}
export default connect((state)=>{
	return {
		datalist:state.datainner,
	}
},{
	handleaxios(){
		return (dispatch)=>{
			axios.get(`/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=10&_=${new Date().getTime()}`).then(res=>{
				console.log(res.data);
				dispatch({
					type:'handleaxios',
					payload:res.data.data.modules
				})
			})
		}
	}
})(Inner);