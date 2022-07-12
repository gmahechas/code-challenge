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
		let counter = 0;
		let node = this.head;
		while (node) {
			counter++;
			node = node.next
		}
		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node
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
		this.head = this.head.next
	}

	removeLast() {
		if (!this.head) {
			return;
		}
		if (!this.head.next) {
			this.head = null;
		}
		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();
		const node = new Node(data);
		if (last) {
			last.next = node;
		} else {
			this.head = node;
		}
	}

	getAt(index) {
		if (!this.head) {
			return;
		}

		let counter = 0;
		let node = this.head;

		while (node) {
			if (counter == index) {
				return node;
			}
			counter++;
			node = node.next;
		}
		return null;
	}

	removeAt(index) {
		if (!this.head) {
			return;
		}

		if (index == 0) {
			this.head = this.head.next;
			return;
		}

		const previous = this.getAt(index - 1);
		if (!previous || previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return
		}

		if (index == 0) {
			this.head = new Node(data, this.head);
			return;
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while(node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while(node) {
			yield node;
			node = node.next;
		}
	}
}

const list = new LinkedList();
list.insertFirst(7)
list.insertFirst(8)
list.insertFirst(9)
console.log('head:::', list.head);
console.log('size:::', list.size())
console.log('getFirst:::', list.getFirst())
console.log('getLast:::', list.getLast())
/* list.removeFirst(); */
/* list.removeLast(); */
list.insertLast(10);
console.log('getAt:::', list.getAt(1));
/* list.removeAt(1); */
console.log('head:::', list.head);
list.insertAt(19, 2);
console.log('head:::', list.head);

for (const node of list) {
	console.log('ACA:::', node);

}

module.exports = { Node, LinkedList };
