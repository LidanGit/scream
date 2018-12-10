import React,{Component} from 'react';
import scss from './category.module.scss';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
class Category extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		return (
			<div className={scss.classify}>
				{
					this.props.isHide?
					<div className={scss.myclassify}>
						<div className={scss.header}>
							<input type="text" placeholder="搜索我的尖叫好物" className={scss.select}></input>
						</div>
						<div className={scss.furniture}>
							<div className={scss.backimg}>
								<img src="/furniture.png" alt="furniture"/>
							</div>
							<ul onClick={this.sendcname.bind(this)}>
								<li><NavLink to="/category/inner?categoryId=20">沙发</NavLink></li>			
								<li><NavLink to="/category/inner?categoryId=21">椅凳</NavLink></li>					
								<li><NavLink to="/category/inner?categoryId=22">桌几</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=2310">床</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=24">柜架</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=2210">餐桌</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=2211">茶几和边桌</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=2212">书桌</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=2414">隔断</NavLink></li>
							</ul>
						</div>
						<div className={scss.home}>
							<div className={scss.backimgt}>
								<img src="/household.png" alt="household"/>
							</div>
							<ul>
								<li><NavLink to="/category/inner?categoryId=25">灯具</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=26">用餐</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=32">时尚生活</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=27">烹饪</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=28">纺织品</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=29">家饰</NavLink></li>
								<li><NavLink to="/category/inner?categoryId=31">卫浴</NavLink></li>
							</ul>
						</div>
					</div>:null
				}
				<section>
					{this.props.children}
				</section>
			</div>
			)
	}
	sendcname (evt) {
		console.log(evt.target.innerHTML);
		this.props.sendTitle(evt.target.innerHTML);
	}
}
export default connect((state)=>{
	return {
		isHide: state.classifyReducer
	}
},{
	sendOuterData (arr) {
		return {
			type: 'sendOuterData',
			payload: arr
		}
	},
	sendTitle (title) {
		return {
			type: 'sendTitle',
			payload: title
		}
	}
})(Category);