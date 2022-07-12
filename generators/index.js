/* function *list() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}

const gen = list();
const numbers = [];

for (const value of gen) {
		numbers.push(value);
}

console.log(numbers); */

/* ################################ */

/* function* numbers() {
	yield 1;
	yield 2;
	yield* moreNumbers()
	yield 6;
	yield 7;
}


function* moreNumbers() {
	yield 3;
	yield 4;
	yield 5;
}

for (const value of numbers()) {
	console.log(value);
} */


/* ################################ */


class Tree {
	constructor(value = null, children = []) {
		this.value = value;
		this.children = children;
	}

	*printValues() {
		yield this.value;
		for (let child of this.children) {
			yield* child.printValues();
		}
	}
}

const tree = new Tree(1, [
	new Tree(2, [new Tree(4)]),
	new Tree(3)
]);

const values = [];
for (const value of tree.printValues()) {
	values.push(value);
}

console.log(values);