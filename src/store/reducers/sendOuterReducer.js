var sendOuterReducer = ((prevState=[],action={})=>{
	var {type,payload} = action;
	switch (type) {
		case 'sendOuterData':
		return payload;
		default:
		return prevState;
	}
})
export default sendOuterReducer;