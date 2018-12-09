var itemreducer = ((prevState={},action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'iteminner':
			return payload;
		default :
			return prevState;
	}
})
export default itemreducer;