/* 
const ops = ['5','2','C', 'D', '+'];

[5,10, 15]


*/

const handlePlus = (currentResult) => currentResult.splice(-2).reduce((previousVal, currentVal) => previousVal + currentVal, 0);
const handleD = (currentResult) => currentResult.splice(-2) * 2;
const handleC = (currentResult) => currentResult.pop();

const calPoints = (ops) => {
	let result = [];
	for (const score of ops) {
		if (isNaN(score)) {
			// is character
			if (score == '+') {
				let newValFromPlus = handlePlus([...result]);
				result.push(newValFromPlus);
			} else if(score == 'D') {
				let data = handleD([...result]);
				result.push(data);
			} else {
				handleC(result)
			}
		} else {
			// is number
			result.push(parseInt(score));
		}
	}

	return result.reduce((previousVal, currentVal) => previousVal + currentVal, 0);
}

const ops = ['5', '2', 'C', 'D', '+'];

console.log(calPoints(ops));