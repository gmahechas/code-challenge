function funChallenge(input) {
	let a = 10; // O(1)
	a = 50 + 3; // O(1)

	for (let i = 0; i < input.length; i++) { // O(n)
		anotherFunction(); // O(n)
		let stranger = true; //O(n)
		a++; // O(n)
	}
	return a;  // O(1)
}

/*
1 + 1 + n + n + n + n + 1
3 + 4n
Big O (3+4n)
Big O(n)
*/


/* *************************** Exercise 2 *************************** */
function anotherFunChallenge(input) {
	let a = 5; // 1
	let b = 10; // 1
	let c = 50; // 1
	for (let i = 0; i < input; i++) { // 3n
		let x = i + 1; 
		let y = i + 2; 
		let z = i + 3;

	}
	for (let j = 0; j < input; j++) { //2n
		let p = j * 2;
		let q = j * 2;
	}
	let whoAmI = "I don't know"; // 1
}

// 4 + 5n
// Big O(4+5n)
// Big O(n)