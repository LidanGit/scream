import React,{Component} from 'react'
import css from './topic.module.scss'
import {connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Topic extends Component{
	constructor(props){
		super(props);
		this.state = {
			toplist:[]
		}
	}
	render(){
		return (
			<div id={css.topic}>
				<div>
					<img src={this.props.datalist.bannerImgSrc} alt="" width="100%" height="250"/>
					<p className={css.p1}>{this.props.datalist.bannerTitle}</p>
				</div>
				<div>
					<ul className="clear">
						{
							this.state.toplist.map((item,index)=>{
								return <NavLink to={'/item/'+item.productId} key={item.prductId} onClick={this.handleitem.bind(this,item)}><li className={css.li}>
									<img src={item.productImg} alt="" style={{width:'1.85rem',height:'1.85rem'}}/>
									<div class={css.div3}>
										<p className={css.p2}>{item.productTitle}</p>
										<p className={css.p3}>￥{item.sellPrice}</p>
										<p className={css.p4}>{item.prizeOrSlogan}</p>
									</div>
								</li></NavLink>
							})
						}
					</ul>
				</div>
			</div>
			)
	}
	componentDidMount(){
		axios.get(`/topic/${this.props.match.params.topid}/products?_=${new Date().getTime()}`).then(res=>{
			this.setState({
				toplist:res.data.lists
			})
		})
	}	
	handleitem(items){
		this.props.handleitems(items);
	}
}
export default connect((state)=>{
	return {
		datalist:state.topicinner
	}
},{
	handleitems(item){
		return {
			type:'iteminner',
			payload:item
		}
	}
})(Topic);