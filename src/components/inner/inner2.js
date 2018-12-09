import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import css from './inner2.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import {NavLink} from 'react-router-dom'
class Inner2 extends Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
	render(){
		return (
			<div id={css.inner2}>
				<div className={css.swiper}>
					<div className="swiper-container swiper1">
					    <div className="swiper-wrapper">
					    {
					    	this.props.datalist.length?this.props.datalist[0].moduleContent.banners.map((item,index)=>{
					      	return 	<div className="swiper-slide" key={item.id}><NavLink to={'/topic/'+item.bannerLinkTargetId} onClick={this.handleziji.bind(this,item)}>
									<img src={item.bannerImgSrc} alt="" width="100%" /></NavLink>
								</div>
								
					    	})
					    	:null
					    }

					    </div>
					    <div className="swiper-pagination"></div>
					</div>
				</div>
				<section>
					<div className={css.main}>
						{
							this.props.datalist.map((item,index)=>{
								if(item.moduleType===106){
									return (
										<div className={css.divs} key={item.moduleId}>
											<p className={css.p1}>{item.moduleName}</p>
											{item.moduleDescription?<p className={css.p2}>{item.moduleDescription}</p>:null}
											<div className={css.fenlei} >
											{item.moduleContent.banners.map((items)=>{
												return <NavLink to={'/category/inner?categoryId='+items.bannerLinkTargetId}><img src={items.bannerImgSrc} alt="" key={items.id}/></NavLink>
											})}
											</div>
										</div>
										)
								}else if(item.moduleType===107){
									return (
										<div className={css.divs} key={item.moduleId}>
											<p className={css.p1}>{item.moduleName}</p>
											<p className={css.p2}>{item.moduleDescription}</p>
											{item.moduleContent.banners.map((items)=>{
												return <NavLink to={'/topic/'+items.bannerLinkTargetId} onClick={this.handleziji.bind(this,items)}><img src={items.bannerImgSrc} alt="" width="100%" key={items.id} /></NavLink>
											})}
											<ul className={css.ul1}>
											{item.moduleContent.products.map((exams)=>{
												return (
													<NavLink to={'/item/'+exams.productId} onClick={this.handleitem.bind(this,exams)}>
														<li className={css.li} key={exams.productId}>
															<img src={exams.productImg} alt=""/>
															<p className={css.p3}>{exams.productName}</p>
															<p className={css.p4}>￥{exams.sellPrice}</p>
														</li>
													</NavLink>
														
													)
											})}
											</ul>
										</div>
										)
								}else if(item.moduleType===401){
									return (
											<div className={css.divs} key={item.moduleId}>
												<p className={css.p1}>{item.moduleName}</p>
												<p className={css.p2}>{item.moduleDescription}</p>
												<div className={'swiper2 swiper-container '+css.ul2}>
												    <div className="swiper-wrapper">
												    {
												    	item.moduleContent.products.map((items,index)=>{
												    		return	<div className="swiper-slide" key={items.productId}>
												    			<NavLink to={'/item/'+items.productId} onClick={this.handleitem.bind(this,items)}>
																<img src={items.productImg} alt=""/>
																<p className={css.p3}>{items.productName}</p>
																<p className={css.p4}>￥{items.sellPrice}</p>
																</NavLink>
												      		</div>
												    		
												    	})
												    }
												     
												    </div>
												    
												  </div>
												  <NavLink to={'/pages/productGroups/'+item.moduleContent.id}><div className={css.all}>
														查看全部
														</div></NavLink>
											</div>		
										)
								}
							})
						}
					</div>
				</section>
			</div>
			)
	}
	componentDidMount(){
		if(this.props.datalist.length===0){
			this.props.handleaxios();
		}else{
			new Swiper('.swiper1', {
			     pagination: {
			       el: '.swiper-pagination',
			     },
			     loop: true,
			     autoplay: {
			            delay: 2500,
			            disableOnInteraction: false,
			          },
			   });
			new Swiper('.swiper2', {
			     slidesPerView: 3,
			     spaceBetween: 30,
			   });
		}
	}
	componentDidUpdate(){
		new Swiper('.swiper1', {
		     pagination: {
		       el: '.swiper-pagination',
		     },
		     loop: true,
		     autoplay: {
		            delay: 2500,
		            disableOnInteraction: false,
		          },
		   });
		new Swiper('.swiper2', {
		     slidesPerView: 3,
		     spaceBetween: 30,
		   });
		
	}
	handlehref(loca){
		window.location.href = loca;
	}
	handleitem(items){
		this.props.handleitems(items);
	}
	handleji(loca){
		window.location.href = '/category/inner?categoryId='+loca;
	}
	handleziji(items){
		this.props.handletopic(items);
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
	},
	handleitems(item){
		return {
			type:'iteminner',
			payload:item
		}
	},
	handletopic(item){
		return {
			type:'topicinner',
			payload:item
		}
	},
})(Inner2);