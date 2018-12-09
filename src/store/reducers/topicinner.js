var topicreaducer = ((prevState={},action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'topicinner':
			return payload;
		default :
			return prevState;
	}
})
export default topicreaducer;