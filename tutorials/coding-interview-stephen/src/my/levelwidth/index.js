// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//  /  |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node  = require('./node');

function levelWidth(root) {
	let arr = [root, 's'];
	const counters = [0];

	while(arr.length > 1) {
		debugger;
		const node = arr.shift();
		debugger;
		if(node === 's') {
			debugger;
			counters.push(0);
			arr.push('s');
			debugger;
		} else {
			debugger;
			arr.push(...node.children);
			counters[counters.length - 1]++;
			debugger;
		}
	}

	return counters;
}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

console.log(levelWidth(root));

module.exports = levelWidth;
