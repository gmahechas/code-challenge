// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			node = node.next;
			count++;
		}
		return count;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		if (!node) {
			return null;
		}
		while (node) {
			if (!node.next) {
				return node;
			}
			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}
		this.head = this.head.next;
	}

	removeLast() {
		let previous = this.head;
		if (!previous) {
			return;
		}
		let node = this.head.next;
		if (!node) {
			this.head = null;
			return;
		}
		while (node.next) {
			previous = node;
			node = node.next;
		}
		previous.next = null
	}

	insertLast(data) {
		let last = this.getLast();
		if (last) {
			last.next = new Node(data);
		} else {
			this.insertFirst(data);
		}
	}

	getAt(index) {

		let node = this.head;
		/* 		if (!node) {
					return null;
				} */

		/* 		if(index > this.size() - 1) {
					return;
				} */

		let count = 0;
		while (node) {
			if (index == count) {
				return node;
			}
			node = node.next;
			count++;
		}

		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}
		if (index == 0) {
			this.head = this.head.next;
			return
		}
		let previous = this.getAt(index - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			return this.head = new Node(data);
		}

		if (index == 0) {
			this.head = new Node(data, this.head);
		}
		let previous = this.getAt(index - 1) || this.getLast();
		previous.next = new Node(data, previous.next);
	}

	forEach(fn) {
/* 		let node = this.head;
		while (node) {
			fn(node)
			node = node.next;
		} */
		for (const data of this) {
				fn(data.node, data.index)
		}
	}

	*[Symbol.iterator]() {
		let index = 0;
		let node = this.head;
		while (node) {
			yield { node, index };
			index++;
			node = node.next;
		}
	}

	midpoint() {
		let slow = this.head;
		let fast = this.head;

		while(fast.next && fast.next.next) {
			slow = slow.next;
			fast = fast.next.next;
		}

		return slow;
	}

	stapBack(n) {
		let slow = this.head;
		let fast = this.head;
		while(n > 0) {
			fast = fast.next;
			n--;
		}

		while(fast.next) {
			slow = slow.next;
			fast = fast.next;
		}

		return slow;
	}
}

function solution() {
	const list = new LinkedList();
	list.insertFirst('a');
	list.insertFirst('b');
	list.insertFirst('c');
	list.insertFirst('d');
	list.insertFirst('e');
	list.insertFirst('f');
	list.insertFirst('g');
	list.insertFirst('h');

/* 	list.forEach((node, index) => {
		console.log(node, index);
	}) */
/* 	for (const { node, index } of list) {
		console.log(index);
	} */

	console.log(list.stapBack(3))
}

solution()

module.exports = { Node, LinkedList };
