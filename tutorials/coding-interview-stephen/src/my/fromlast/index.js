// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const { LinkedList } = require('./linkedlist');

function fromLast(list, n) {
	let slow = list.head;
	let fast = list.head;

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

const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
//console.log(list.head);
console.log(fromLast(list, 2))

module.exports = fromLast;