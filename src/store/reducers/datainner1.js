var datainner2 = ((prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'handleaxios2':
			return payload;
		default :
			return prevState;
	}
})
export default datainner2;