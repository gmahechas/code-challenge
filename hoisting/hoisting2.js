/* var myName = 'Gustavo'
console.log(myName) */

/* let myName;

console.log(myName); */

const myClousere = (n) => {
	const inner = () => {
		return n + counter
	}
	let counter = 5;
	return inner;
}

console.log(myClousere(2)())