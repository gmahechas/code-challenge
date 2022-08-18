
function solution(T, R) {

	const mapped = {};

	for (let i = 0; i < T.length; i++) {
		let testWithLetter = T[i];
		let lastIsNumber = isNumeric(testWithLetter.slice(testWithLetter.length - 1, testWithLetter.length))
		let test = testWithLetter;
		if (!lastIsNumber) {
			test = testWithLetter.slice(0, testWithLetter.length - 1)
		}

		mapped[test] = mapped[test] + 1 || 1;
/* 		if (R[i].includes['Wrong answer', 'Runtime error', 'Time limit exceeded']) {
			delete mapped[test];
		} */

		return mapped

	}
}

function isNumeric(str) {
	if (typeof str != "string") return false
	return !isNaN(str) &&
		!isNaN(parseFloat(str))
}

console.log(solution(
	[
		'test1a',
		'test2',
		'test1b',
		'test1c',
		'test3'
	],
	[
		'Wrong answer',
		'OK',
		'Runtime error',
		'OK',
		'Time limit exceeded'
	]));