import React,{Component} from 'react'
import css from './item.module.scss'
import {connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Item extends Component{
	constructor(props){
		super(props);
		this.state = {
			spuInfos:[],
			skuInfos:[],
			recommend:[],
			isFuwu:true,
			isJiage:false
		}
	}
	render(){
		document.documentElement.scrollTop = 0;
		return (
			<div id={css.item}>
					<div className={css.header}>
						<NavLink to="/pages"><img src="/home.png" alt=""/></NavLink>
						<div>商品详情</div>
						<NavLink to="/search"><img src="/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" alt=""/></NavLink>
					</div>
					<div className={css.div1}>
						<img src={this.props.datalist.productImg} alt="" width="100%" height="300px"/>
						<p className={css.p1}>{this.props.datalist.productTitle}</p>
						<p className={css.p2}>￥{this.props.datalist.sellPrice}</p>
					</div>
					<div className={css.div}>
						{
							this.state.spuInfos.map((item,index)=>{
								return <img key={item.content} src={item.content} alt="" width="100%" style={{margin:'0.05rem 0 0.05rem 0'}}/>
							})
						}
					</div>
					<div className={css.div2}>
						<p className={css.p3}>详细规格参数</p>
						<ul className={css.ul1}>
							{
								this.state.skuInfos.map((item,index)=>{
									return <li key={item.attributeName}>
										<span>{item.attributeName}</span>
										<span>{item.attributeValueText}</span>
									</li>
								})
							}
						</ul>
					</div>
					<div className={css.div6}>
						<div className={css.tou}>
						<p>其他信息</p>
						<p>- OTHER -</p>
						</div>
						<div className={css.info} style={{background:'white'}}>
							<div className={css.fuwu}>
								<div style={{height:'0.64rem',lineHeight:'0.64rem',background:'white'}} onClick={this.changefuwu.bind(this)}>服务承诺<i className={"iconfont r "+(this.state.isFuwu?'icon-less':'icon-more')}></i></div>
								{
									this.state.isFuwu?
									<div class={css.imgs+' clear'}>
										<a href="https://m.wowdsgn.com/pages/baojia">
										<div className={css.icons}>
											<img src='/promise2.png' alt=""/>
											<p>价格保障/变动返差价</p>
											<p>7日报价</p>
										</div>
										</a>
										<a href="https://m.wowdsgn.com/pages/tuihuan">
										<div className={css.icons}>
											<img src="/promise3.png" alt=""/>
											<p>三年内质换</p>
											<p>7日退换</p>
										</div>
										</a>
									</div>
									:null
								}
							</div>
							<div className={css.jiage}>
								<div style={{height:'0.64rem',lineHeight:'0.64rem',background:'white'}} onClick={this.changejiage.bind(this)}>价格说明<i className={"iconfont r "+(this.state.isJiage?'icon-less':'icon-more')}></i></div>
								{
									this.state.isJiage?
									<div className={css.ps}>
									<p>
					                    划线价格：划线的价格可能是商品的专柜价、吊牌价、正品零售价、指导价、曾经展示过的销售价等，仅供您参考
					                </p>
					                <p>
					                    未划线价格：未划线的价格是商品的销售标价，具体的成交价格可能因会员使用优惠券、积分等发生变化，最终以订单结算价格为准。
					                </p>
					                <p>
					                    * 此说明仅当出现价格比较时有效。若这件商品针对划线价格进行了特殊说明，以特殊说明为准
					                </p>
									</div>
									:null
								
								}
							</div>
						</div>
					</div>
					<div className={css.div3}>
						<div className={css.tou}>
						<p>猜你喜欢</p>
						<p>- what's hot-</p>
						</div>
						<div className={css.body+' clear'}>
							{
								this.state.recommend.map((item,index)=>{
									return <NavLink to={'/item/'+item.productId} onClick={this.handleitem.bind(this,item)}><li key={item.productId}>
										<img src={item.productImg} alt=""/>
										<div className={css.div4}>
											<p className={css.p2}>{item.productTitle}</p>
											<p className={css.p3}>￥{item.sellPrice}</p>
										</div>
										</li></NavLink>
								})
							}
						</div>
					</div>
					<div className={css.div5} style={{height:'0.6rem',paddingLeft:'0.25rem',background:'white',margin:'0.25rem 0'}}>
						<span>需要帮助</span>
						<span style={{marginLeft:'10px',color:'red',lineHeight:'0.6rem'}}>周一至周五&nbsp;&nbsp;&nbsp;9:00~18:30</span>
					</div>
			</div>
			)
	}
	componentWillMount(){
		document.documentElement.scrollTop = 0;
	}
	componentDidMount(){
		Promise.all([axios.get('/itemdetail/spuInfos/7040?_=1544000667855'),
			axios.get('/itemdetail/skuInfos/7098?_=1544000667854'),
			axios.get('/recommend/item?skuId=7098&_=1544000667857')]).then((res)=>{
				this.setState({
					spuInfos:res[0].data.data.itemDetailIntroVoList,
					skuInfos:res[1].data.data.skuAttrPairs,
					recommend:res[2].data.data
				})

			})
	}
	changefuwu(){
		this.setState({
			isFuwu:!this.state.isFuwu,
		})
		document.documentElement.scrollTop = document.querySelector('.'+css.fuwu).offsetTop;
	}
	handleitem(items){
		this.props.handleitems(items);
	}
	changejiage(){
		this.setState({
			isJiage:!this.state.isJiage
		})
		document.documentElement.scrollTop = document.querySelector('.'+css.jiage).offsetTop;
	}
}
export default connect((state)=>{

	return {
		datalist:state.iteminner
	}
},{
	handleitems(item){
		return {
			type:'iteminner',
			payload:item
		}
	}
})(Item);