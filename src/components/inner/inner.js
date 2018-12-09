import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import css from './inner.module.scss'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import { PullToRefresh, ListView, Button } from 'antd-mobile';
import ReactDom from 'react-dom'
import {NavLink} from 'react-router-dom'
class Inner extends Component{
	constructor(props){
		super(props);
		this.state = {
			page:1,
			refreshing: false,
			down: true,
			height: document.documentElement.clientHeight,
			data: [],
		}
	}
	render(){
		return (
			<div id={css.inner}>
				<div className={css.swiper}>
					<div className="swiper-container swiper1">
					    <div className="swiper-wrapper">
					    {
					    	this.props.datalist.length?this.props.datalist[0].moduleContent.banners.map((item,index)=>{
					      	return 	<div className="swiper-slide" key={item.id} onClick={this.handlehref.bind(this,item.bannerLinkUrl)}>
								<img src={item.bannerImgSrc} alt="" width="100%" />
					      	</div>
					    		
					    	}):null
					    }
					    </div>
					    <div className="swiper-pagination"></div>
					</div>
				</div>
				
				<div>
				     
				      <PullToRefresh
				        damping={60}
				        ref={el => this.ptr = el}
				        style={{
				          height: -40,
				          overflow: 'auto',
				          textAlign:'center'
				        }}

				        indicator={this.state.down ? {} : { deactivate: '上拉刷新' }}
				        direction='up'
				        refreshing={this.state.refreshing}
				        onRefresh={() => {
				          this.setState({ refreshing: true });
				          var a = this.state.page + 1
				          this.setState({ 
				          	refreshing: true, 
				          	isLoading: true ,
				          	page:a
				          },()=>{
				          		this.props.handleaxios(this.state.page);
				          		this.setState({
				          			refreshing:false,
				          		})
				          });
				        }}
				      >
				        <section>
				        	<div className={css.main}>
				        		{
				        			this.props.datalist.map((item,index)=>{
				        				if(item.moduleType===102){
				        					return (
				        						<div className={css.divs} key={item.moduleId}>
				        							<p className={css.p1}>{item.moduleName}</p>
				        							<p className={css.p2}>{item.moduleDescription}</p>
				        							{item.moduleContent.banners.map((items)=>{
				        								return <img src={items.bannerImgSrc} alt="" key={items.id} width="100%" onClick={this.handleji.bind(this,items.bannerLinkTargetId)}/>
				        							})}
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
				      </PullToRefresh>
				    </div>
				
			</div>
			)
	}
	componentDidMount(){
		
		if(this.props.datalist.length===0){
			this.props.handleaxios(this.state.page);
			
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
	handlehref(loca){
		window.location.href = loca;
	}
	handleji(loca){
		window.location.href = 'https://m.wowdsgn.com/topic/'+loca;
	}
	handleziji(items){
		this.props.handletopic(items);
	}
	handleitem(items){
		this.props.handleitems(items);
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

}
export default connect((state)=>{
	return {
		datalist:state.datainner,
	}
},{
	handleaxios(page){
		return (dispatch)=>{
			axios.get(`/v2/page?pageId=1&tabId=1&currentPage=${page}&pageSize=10&_=${new Date().getTime()}`).then(res=>{
				dispatch({
					type:'handleaxios',
					payload:res.data.data.modules
				})
			})
		}
	},
	handletopic(item){
		return {
			type:'topicinner',
			payload:item
		}
	},
	handleitems(item){
		return {
			type:'iteminner',
			payload:item
		}
	}
})(Inner);