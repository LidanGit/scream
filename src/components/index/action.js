import axios from 'axios'
var action = {
	handleHeader(id){
		return {
			type:'handleheader',
			payload:id
		}
	}

}
export default action;
{this.props.listdata.map((item,index)=>{
						return	<li>
								{item.moduleId}
							</li>
						})}