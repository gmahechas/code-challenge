const { performance } = require('perf_hooks');
const large = new Array(100000).fill('dory');
const everyone = ['nemo', ...large]

// O(n)
function findNemo(array) {
	let t0 = performance.now();
	for(let i = 0; i < array.length; i++) {
		if(array[i] === 'nemo') {
			console.log('NEMO found')
		}
	}
	let t1 = performance.now();
	console.log(`It took ${t1-t0} ms`)
}

findNemo(everyone);


// O(1)
function one(array){
	return array[0];
}

// O(2) --------------------| === O(1)
function one(array){    //  |     
	console.log(array[1]) // O(1)
	return array[0];      // O(1)
}