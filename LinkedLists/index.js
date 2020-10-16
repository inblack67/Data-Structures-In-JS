class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	insertFirstNode(data) {
		this.head = new Node(data, this.head);
		this.size++;
	}

	insertLast(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	insertAtIndex(data, index) {
		if (index > this.size) {
			console.log(`Index is invalid`);
			return;
		}
		if (index === 0 || !this.head) {
			this.insertFirstNode(data);
			return;
		}
		const newNode = new Node(data);
		let curr = this.head,
			prev,
			count = 0;
		while (count < index) {
			prev = curr;
			curr = curr.next;
			count++;
		}
		prev.next = newNode;
		newNode.next = curr;
		this.size++;
	}

	getAtIndex(index) {
		let curr = this.head;
		let count = 0;
		while (curr) {
			if (count === index) {
				console.log(curr.data);
			}
			curr = curr.next;
			count++;
		}
		return; // empty list
	}

	removeAtIndex(index) {
		let curr = this.head;
		let prev;
		let count = 0;
		if (index === 0) {
			this.head = curr.next;
		} else {
			while (count < index) {
				prev = curr;
				curr = curr.next;
				count++;
			}
			prev.next = curr.next;
		}
		this.size--;
		return; // empty list
	}

	clearList() {
		this.head = null;
		this.size = 0;
	}

	displayList() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll1 = new LinkedList();
ll1.insertFirstNode(10);
ll1.insertFirstNode(20);
ll1.insertLast(30);
ll1.insertLast(5);
ll1.insertAtIndex(70, 1);
ll1.insertAtIndex(20, 1);
ll1.getAtIndex(2);
ll1.removeAtIndex(5);
// ll1.clearList();
ll1.displayList();
