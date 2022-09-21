// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');


function levelWidth() {
	const root = new Node(20);

	const one = new Node(0);
	const two = new Node(40);
	const three = new Node(-15);
	root.addMany([one, two, three]);

	const four = new Node(12);
	const five = new Node(-2);
	const six = new Node(1);
	const seven = new Node(-2);

	one.addMany([four, five, six]);
	three.addMany([seven]);

	const counters = [0];
	const arr = [root, 's'];

	while(arr.length > 1) {

		const node = arr.shift();
		arr.push(...node.children);		
	}


}

levelWidth()
module.exports = levelWidth;
