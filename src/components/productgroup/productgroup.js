import React,{Component} from 'react'
import css from './productgroup.module.scss'
import axios from 'axios'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
class Progroup extends Component{
	constructor(props){
		super(props);
		this.state = {
			datalist:[],
			page:1,
			// isShow:false
		}
	}
	render(){
		return (
			<div id={css.progroup}>
				<ul className={css.ul1+' clear'}>
					{
						this.state.datalist.map((item,index)=>{
							return <NavLink to={'/item/'+item.productId} key={item.productId} onClick={this.handleitem.bind(this,item)}><li>
								<img src={item.productImg} alt=""/>
								<div className={css.div1}>
									<p className={css.p1}>{item.productTitle}</p>
									<p className={css.p2}><span>￥{item.sellPrice}</span>{item.originalPrice===item.sellPrice?null:<span style={{color:'#ec1111',textDecoration:'line-through',marginLeft:'0.2rem'}}>￥{item.originalPrice}</span>}</p>
									<p className={css.p3}>{item.prizeOrSlogan}</p>
								</div>
								</li></NavLink>
						})
					}
				</ul>
				{
					this.props.isShow?<div style={{lineHeight:'0.3rem',textAlign:'center'}}>没有更多了</div>:null
				}
				
			</div>
			)
	}

	componentDidMount(){
		axios.get(`/pages/productGroup/${this.props.match.params.groupid}/products?currentPage=1&_=${new Date().getTime()}`).then(res=>{
			 // console.log(res.data);
			this.setState({
				datalist:res.data.data
			})
			
		})
		// console.log('1111111-mount');
		window.onscroll = this.lazyload.bind(this);
	}
	componentDidUpdate(){
		console.log('22222222-update--------'+this.state.page);
		if(this.state.page!==1){
			window.onscroll = this.lazyload.bind(this);
		}
	}
	shouldComponentUpdate(prev,state){
		// console.log(state);
		if(this.state.datalist.length===state.datalist.length){
			this.props.handleisShow();
				return false;
		}else{
			return true;
		}
	}
	handleitem(items){
		this.props.handleitems(items);
	}
	lazyload(){
		// console.log(document.documentElement.scrollTop);
		// console.log(document.querySelector('.'+css.ul1).offsetHeight)
		// console.log(document.body.clientHeight);
		if(document.querySelector('#'+css.progroup).offsetHeight===0){
			console.log('111');
		}else{
			if((document.querySelector('#'+css.progroup).offsetHeight-document.body.clientHeight-document.documentElement.scrollTop)<100){
				this.setState({
					page:this.state.page+1
				},()=>{
					// console.log(this.state.page)
					window.onscroll = null;
					axios.get(`/pages/productGroup/${this.props.match.params.groupid}/products?currentPage=${this.state.page}&_=${new Date().getTime()}`).then(res=>{
						// console.log(res.data);
						this.setState({
							datalist:[...this.state.datalist,...res.data.data]
						})
					})
				})
			}
		}
	}
	componentWillUnmount(){
		window.onscroll = null;
	}
}
export default connect((state)=>{
	return {
		isShow:state.isShow
	}
},{
	handleisShow(){
		return {
			type:'isShow',
			payload:true
		}
	},
	handleitems(item){
		return {
			type:'iteminner',
			payload:item
		}
	}
})(Progroup); 