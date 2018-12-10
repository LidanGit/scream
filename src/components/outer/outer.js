import React,{Component} from 'react';
import {connect} from 'react-redux';
import scss from './outer.module.scss';
import {Link} from 'react-router-dom';
import Swiper from 'swiper';
import axios from 'axios';
import 'swiper/dist/css/swiper.css';
import { BackTop } from 'antd';
class Outer extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	currentIndex: 0,
	  	arr: [],
	  	sort: ['上新','销量','价格'],
	  	currentSortIndex: 0,
	  	list: null,
	  	data: [],
	  	order: true,
	  	title: '',
	  	page: 1,
	  	imgSwip: ''
	  };
	}
	render () {
		var bor = {width:'0.78rem',height: '0.78rem',border: '1px solid #cac3c3',textAlign: 'center',lineHeight: '0.78rem',fontWeight: 'bold',color: 'white'};
		var borClick = {width:'0.78rem',height: '0.78rem',border: '1px solid white',opacity: 0.8,textAlign: 'center',lineHeight: '0.78rem',fontWeight: 'bold',color: 'white'};
		var borf = {width:'0.78rem',height: '0.78rem',border: '1px solid #cac3c3',textAlign: 'center',lineHeight: '0.78rem',fontWeight: 'bold',color: 'white',background: 'url(/all.png) no-repeat 0.18rem 0.04rem',backgroundSize: '0.4rem',lineHeight: '1.2rem'};
		var borfClick = {width:'0.78rem',height: '0.78rem',border: '1px solid white',opacity: 0.8,textAlign: 'center',lineHeight: '0.78rem',fontWeight: 'bold',color: 'white',background: 'url(/all.png) no-repeat 0.18rem 0.04rem',backgroundSize: '0.4rem',lineHeight: '1.2rem'};
		var bort = {width:'0.78rem',height: '0.78rem',border: '1px solid white',textAlign: 'center',lineHeight: '0.78rem',fontWeight: 'bold',color: 'white'};
		var imgs = {background: 'url(/' + this.state.imgSwip + '.jpg)',backgroundSize: '100% 1.1rem'}
		return (
		<div className={scss.outer}>
			<div className={scss.header}>
				<div className={scss.ify}><Link to="/pages"></Link></div>
				<div className={scss.title}>{this.state.title}</div>
				<div className={scss.idex}><Link to="/category"></Link></div>
			</div>
			<div className={scss.swiper} style={imgs}>
				<div className="swiper-container" style={{marginTop: '0.15rem',padding: '0 0.18rem 0 0.15rem'}}>
				    <div className="swiper-wrapper">
						{
							this.state.arr.map((data,index)=>
								index===0?
								<div className="swiper-slide" style={this.state.currentIndex===index?borfClick:borf} key={data.search} onClick={this.myClick.bind(this,index,data.search)}>{data.type}</div>	
								:<div className="swiper-slide" style={this.state.currentIndex===index?borClick:bor} key={data.search} onClick={this.myClick.bind(this,index,data.search)}>{data.type}</div>	
							)
						}
				    </div>
				</div>
			</div>
			<div className={scss.sort}>
				{
					this.state.sort.map((data,index)=>
						<div className={scss.sortson} key={data}><a onClick={this.sortGoods.bind(this,index)} className={this.state.currentSortIndex===index?scss.clicka:null}>{data}</a></div>
					)
				}
			</div>
			<div className={scss.goods}>
				<ul>
					{
						this.state.data.map(data=>
							<li key={data.productImg}>
								<img src={data.productImg} alt={data.productImg}/>
								<p className={scss.goodName}>{data.productTitle}</p>
								<p className={scss.goodPrice}>￥{data.originalPrice}</p>
								<p className={scss.goodDescribe}>{data.prizeOrSlogan}</p>
							</li>
						)
					}
				</ul>
			</div>
			<div>
			    <BackTop />
			</div>
			<div></div>
		</div>
		)
	}
	componentWillMount () {
		var id = this.props.location.search.split('=')[1];
		switch (id) {
			case '20': case '21':case '22':case '2310':case '24':case '2210':case '2211':case '2212':case '2414':
			this.setState({
				arr: [
						{type:'All',search: 35},
						{type:'沙发',search: 20},
						{type:'椅凳',search: 21},
						{type:'柜架',search: 24},
						{type:'休闲椅',search: 2012},
						{type:'餐桌',search: 2210},
						{type:'茶几和边桌',search: 2211},
						{type:'书桌',search: 2212},
						{type:'床',search: 2310},
						{type:'隔断',search: 2414}
					],
				imgSwip: '10'
			},()=>{
				var title = this.state.arr.find(data=>data.search===parseInt(id)).type;
				this.setState({
					title: title
				})
			})
			break;
			case '25':
			this.setState({
				arr: [
						{type:'All',search: 25},
						{type:'落地灯',search: 2510},
						{type:'吊灯',search: 2511},
						{type:'氛围灯',search: 2512},
						{type:'台灯',search: 2513},
						{type:'灯泡和配件',search: 2514}
					],
				title: '灯具',
				imgSwip: 'lamp'
			})
			break;
			case '26':
			this.setState({
				arr: [
						{type:'All',search: 26},
						{type:'餐具',search: 2610},
						{type:'餐桌布置',search: 2612},
						{type:'咖啡和茶',search: 2613},
						{type:'酒具',search: 400080}
					],
				title: '用餐',
				imgSwip: 'eat'
			})
			break;
			case '32':
			this.setState({
				arr: [
						{type:'All',search: 32},
						{type:'生活用品',search: 3210},
						{type:'首饰',search: 3211},
						{type:'箱包',search: 3212},
						{type:'雨伞',search: 3213},
						{type:'电子',search: 3214},
						{type:'个人护理',search: 3215},
						{type:'文具',search: 3217},
						{type:'手表',search: 400001}
					],
				title: '时尚生活',
				imgSwip: 'life'
			})
			break;
			case '27':
			this.setState({
				arr: [
						{type:'All',search: 27},
						{type:'锅具',search: 2710},
						{type:'厨房用具',search: 2711},
						{type:'烘焙器具',search: 2713}
					],
				title: '烹饪',
				imgSwip: 'food'
			})
			break;
			case '28':
			this.setState({
				arr: [
						{type:'All',search: 28},
						{type:'地毯',search: 2810},
						{type:'靠垫抱枕',search: 2811},
						{type:'床上用品',search: 2812},
						{type:'毛巾织物',search: 2813}
					],
				title: '纺织品',
				imgSwip: 'cloth'
			})
			break;
			case '29':
			this.setState({
				arr: [
						{type:'All',search: 29},
						{type:'时钟',search: 2910},
						{type:'墙饰',search: 2911},
						{type:'摆件',search: 2912},
						{type:'香薰和蜡烛',search: 2913},
						{type:'花瓶花盆',search: 2914},
						{type:'镜子',search: 2915},
						{type:'挂画',search: 400002}
					],
				title: '家饰',
				imgSwip: 'home'
			})
			break;
			case '31':
			this.setState({
				arr: [
						{type:'All',search: 31},
						{type:'浴室家具',search: 3111},
						{type:'浴室用品',search: 3112}
					],
				title: '卫浴',
				imgSwip: 'bath'
			})
			break;
			default:
			console.log('bb');
			break;
		}
	}
	componentDidMount () {
		this.props.hideClassify();
		var swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			spaceBetween: 15,
			freeMode: true
	    });
	    var search = this.props.location.search.split('=')[1];
		axios.get(`/pages/category/${search}?currentPage=1&sort=onShelfTime&order=desc&_=1543913074894`).then((res)=>{
	   		this.setState({
	   			data: res.data.data
	   		})
		})
		window.onscroll = this.handleScroll.bind(this); 
	}
	componentWillUnmount () {
		this.props.showClassify();
		window.onscroll = null;
	}
	myClick (index,gsearch) {
		this.setState({
			currentIndex: index
		})
		this.setState({
			page: 1
		})
		var mysort = ['onShelfTime','sales','price'][this.state.currentSortIndex];
		var goodOrder = this.state.order?'desc':'asc';
		if(mysort === 'price'){
			axios.get(`/pages/category/${gsearch}?currentPage=1&sort=${mysort}&order=${goodOrder}&_=1543913074894`).then((res)=>{
				this.setState({
					data: res.data.data
				})
			})
		}else{
			axios.get(`/pages/category/${gsearch}?currentPage=1&sort=${mysort}&order=desc&_=1543913074894`).then((res)=>{
				this.setState({
					data: res.data.data
				})
			})
		}
		this.props.sendSearch(gsearch);
	}
	sortGoods (index) {
		var selectSort = ['onShelfTime','sales','price'];
		this.setState({
			currentSortIndex: index,
			page: 1
		})
		console.log(this.props.location);
		var goodOrder = this.state.order?'asc':'desc';
		var search = this.props.mysearch?this.props.mysearch:this.props.location.search.split('=')[1];
		if(index===2){
			axios.get(`/pages/category/${search}?currentPage=1&sort=${selectSort[index]}&order=${goodOrder}&_=1543913074894`).then((res)=>{
				console.log(res);
				this.setState({
					data: res.data.data
				})
				this.setState({
					order: !this.state.order
				})
			})
		}else{
			axios.get(`/pages/category/${search}?currentPage=1&sort=${selectSort[index]}&order=desc&_=1543913074894`).then((res)=>{
				console.log(res);
				this.setState({
					data: res.data.data
				})
			})
		}	
	}
	handleScroll () {
		var selectSort = ['onShelfTime','sales','price'];
		var index = this.state.currentSortIndex;
		var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		var goodOrder = this.state.order?'asc':'desc';
		var search = this.props.mysearch?this.props.mysearch:this.props.location.search.split('=')[1];
		console.log(scrollTop,this.state.page);
		if(scrollTop >= 760 + 1400 * (this.state.page - 1)){
			this.setState({
				page: this.state.page + 1
			})
			console.log(this.state.page)
			if(index === 2){
				axios.get(`/pages/category/${search}?currentPage=${this.state.page}&sort=${selectSort[index]}&order=${goodOrder}&_=1543913074894`).then((res)=>{
					this.setState({
						data: [...this.state.data,...res.data.data]
					})
				})
			}else{
				axios.get(`/pages/category/${search}?currentPage=${this.state.page}&sort=${selectSort[index]}&order=desc&_=1543913074894`).then((res)=>{
					this.setState({
						data: [...this.state.data,...res.data.data]
					})
				})
			}
		}
		// var f = window.localStorage;
		localStorage.setItem('data',{x:1});
		console.log(localStorage.key(0));
		// console.log(JSON.parse(localStorage.getItem('data')));
	}
}

export default connect((state)=>{
	return {
		data: state.sendOuterReducer,
		mysearch: state.sendSearchReducer,
		title: state.sendTitleReducer
	}
},{
	hideClassify () {
		return {
			type: 'hideClassify',
			payload: false
		}
	},
	showClassify () {
		return {
			type: 'showClassify',
			payload: true
		}
	},
	sendSearch (gsearch) {
		return {
			type: 'sendSearch',
			payload: gsearch
		}		
	}
})(Outer);