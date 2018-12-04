var datainner3 = ((prevState=[],action={})=>{
	console.log(payload);
	let {type,payload} = action;
	switch(type){
		case 'handleaxios3':
			return payload;
		default :
			return prevState;
	}
})
export default datainner3;