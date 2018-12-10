import React,{Component} from 'react'
import css from "./message.module.scss";
import axios from 'axios';
class Message extends Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}
	componentDidMount(){
		// axios.get(`/message/messageMain?_=${new Date().getTime()}`).then(res=>{
		// 	console.log (res)
		// })
		axios({
			url:`/message/messageMain?_=${new Date().getTime()}`,
			methods:'get',
			headers:{
				cookie:'UM_distinctid=16772811e437f1-0bd7297e7c3411-9393265-1fa400-16772811e4441c; _ga=GA1.2.2017055429.1543814347; _gid=GA1.2.1909613527.1543814347; channel=3; sessionToken=iw80cq86j1dvqawa4ipnjkgg05aypfrdtyf2; JSESSIONID=m4jskkFJLtOwBHCsIa0ldG-YQLW1PJEXbfqOl7e8; CNZZDATA1261113455=402015010-1543814114-https%253A%252F%252Fwww.baidu.com%252F%7C1543908846; _gali=message; _gat=1'
			}
		})
			
	}
	render(){
		return (
			<div>
				
					<header className={css.header}>
						<a><img src={require("./img/home-07bdcdd36c9df74ef30110623d2d708b.png")} alt=""/></a><h3>消息中心</h3><a><img src={require("./img/me.png")}/></a>
					</header>
					<div className={css.columnList}>
						<div className={css.commentRoot}>
							<div className={css.clearfix}>
								<img src={require("./img/official_message.png")} alt=""/>
								<div className={css.messageInforRihgtTop}>
									<div><p>尖叫精选</p></div><i>></i>
									
								</div>
								<div><p>{}</p></div>
							</div>

						</div>
					</div>
				
				
			</div>
			)
	}
}
export default Message;

