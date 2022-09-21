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
		this.children.push(new Node(data));
	}

	addMany(data) {
		this.children.push(...data);
	}

	remove(data) {
		this.children = this.children.filter(node => {
			return node.data != data;
		})
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}

	traverseBF(fn) {
		const arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}

	traverseDF(fn) {
		const arr = [this.root];
		while(arr.length) {
			const node = arr.shift();
			arr.unshift(...node.children);
			fn(node);
		}
	}

}

function solution() {
	const root = new Node(20)
	const tree = new Tree(root);

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

	tree.traverseBF(node => {
		console.log(node);
	});
}

solution()
module.exports = { Tree, Node };
