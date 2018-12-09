
var datainner = ((prevState=[],action={})=>{
	let {type,payload} = action;
	switch(type){
		case 'handleaxios':
			return [...prevState,...payload];
		default :
			return prevState;
	}
})
export default datainner;