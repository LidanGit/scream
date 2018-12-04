import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
class Inner2 extends Component{
	constructor(props){
		super(props);
		this.state = {
			
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
		datalist:state.datainner2
	}
},{
	handleaxios(){
		return (dispatch)=>{
			axios.get(`/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=10&_=${new Date().getTime()}`).then(res=>{
				console.log(res.data.data.modules);
					dispatch({
						type:'handleaxios2',
						payload:res.data.data.modules
					})
					// datalist:res.data.data.modules
				
			})
		}
	}
})(Inner2);