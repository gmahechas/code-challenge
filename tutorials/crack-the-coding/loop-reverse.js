function loopInSomeSense(array, sense='left') {
	let newArray = [...array];
	
	if(sense=='rigth') {
		newArray = newArray.reverse();
	}
	
	for (const number of newArray) {
		console.log(number)
	}
}

loopInSomeSense([1,2,3], 'rigth');