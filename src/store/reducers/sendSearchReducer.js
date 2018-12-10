var sendSearchReducer = ((prevState = null,action={})=>{
	var {type,payload} = action;
	switch (type) {
		case 'sendSearch':
		return payload;
		default: 
		return prevState;
	}
})
export default sendSearchReducer;