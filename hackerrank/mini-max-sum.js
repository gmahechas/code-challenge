function solution(arr) {
	arr.sort((a, b) => a - b);
	let firstPart = arr.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
	let lastPart = arr.slice(arr.length - 4, arr.length).reduce((acc, curr) => acc + curr, 0);
/* 	console.log(firstPart)
	console.log(lastPart) */
	console.log(`${firstPart} ${lastPart}`);
}
solution([7, 69, 2, 221, 8974]);