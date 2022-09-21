// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record)
	}

	remove() {
		return this.data.pop();
	}

	getData() {
		return this.data;
	}
}


function solution() {
	const queue = new Queue();
	queue.add(1);
	queue.add(3);
	console.log(queue.getData())
}

solution();
module.exports = Queue;
