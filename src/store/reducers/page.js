var pageReducer = ((prevState=[],action={})=>{
	var {type,payload} = action;
	switch(type){
		case 'handleheader':
			return payload;
		default :
			return prevState;
	}
	return prevState;
}) 
export default pageReducer