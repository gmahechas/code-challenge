
function solution(s) {
	let arrFrecuency = [];
	let pivotArr = [];

	if (s.length == 0) {
		return 0;
	} else if (s.length == 1) {
		return 1;
	}

	for (let i = 0; i < s.length; i++) {
		if(!pivotArr.includes(s[i])) {
			debugger;
			pivotArr.push(s[i]);
			debugger;
			if(i+1 == s.length) {
				arrFrecuency.push(pivotArr.length);	
			}
		} else {
			debugger;
			arrFrecuency.push(pivotArr.length);
			if(s[i-1] != s[i]) {
				pivotArr = [s[i-1], s[i]];
			} else {
				pivotArr = [s[i]];
			}
			debugger;
		}
	}
	return Math.max(...arrFrecuency);
}

console.log(solution("anviaj"))