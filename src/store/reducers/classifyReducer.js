var classifyReducer = ((prevState=true,action={})=>{
	var {type,payload} = action;
	switch (type) {
		case 'hideClassify':
		return payload;
		case 'showClassify':
		return payload;
		default:
		return prevState;
	}
}) 
export default classifyReducer;