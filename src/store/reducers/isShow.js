var isShowreducer = ((prevState=false,action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'isShow' :
			return payload;
		default :
			return prevState;
	}
})
export default isShowreducer;