// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		const node = new Node(data);
		this.children.push(node);
		return node;
	}

	remove(data) {
		this.children = this.children.flter(node => node.data !== data);
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		let arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}

	traverseBFFromNode(fn, node) {
		let arr = [node];
		while (arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}

	traverseDF(fn) {
		let arr = [this.root];
		while (arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}

	traverseDFFromNode(fn, node) {
		let arr = [node];
		while (arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}
}

const tree = new Tree();
const node1 = new Node('1');

/* level 1 */
tree.root = node1;

/* level 2 */
const node2 = node1.add('2');
const node3 = node1.add('3');

/* level 3 */
const node4 = node2.add('4');
const node5 = node2.add('5');

const node6 = node3.add('6');
const node7 = node3.add('7');

/* level 4 */
const node8 = node4.add('8');
const node9 = node4.add('9');
const node10 = node4.add('10');

const node11 = node5.add('11');
const node12 = node5.add('12');

const node13 = node6.add('13');
const node14 = node6.add('14');
const node15 = node7.add('15');


/* tree.traverseBF(node => console.log(node.data)); */
/* tree.traverseBFFromNode(node => console.log(node.data), node2); */
/* tree.traverseDF(node => console.log(node.data)); */
tree.traverseDFFromNode(node => console.log(node.data), node2);



module.exports = { Tree, Node };
