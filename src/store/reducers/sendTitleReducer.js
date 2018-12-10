var sendTitleReducer = ((prevState='',action={})=>{
	var {type,payload} = action;
	switch (type) {
		case 'sendTitle':
		return payload;
		default:
		return prevState;
	}
})
export default sendTitleReducer;