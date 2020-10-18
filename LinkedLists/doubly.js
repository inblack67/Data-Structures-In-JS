class Node {
	data;
	next;
	prev;
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class LinkedList {
	head;
	constructor() {
		this.head = null;
		this.size = 0;
	}
	insertFirst(data) {
		const newNode = new Node(data, this.head);
		if (this.head) {
			this.head.prev = newNode;
		}
		this.head = newNode;
		this.size++;
	}
	insertLast(data) {
		const newNode = new Node(data);
		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = newNode;
		newNode.prev = curr;
		this.size++;
	}
	insertAtIndex(data, index) {
		if (index > this.size) {
			console.log(`Index is invalid`);
			return;
		}
		if (index === 0 || !this.head) {
			this.insertFirst(data);
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
		newNode.prev = prev;
		newNode.next = curr;
		this.size++;
	}

	deleteNode(index) {
		if (index > this.size - 1) {
			return;
		}
		let curr = this.head;
		if (index === 0) {
			this.head = curr.next;
			if (this.head) {
				this.head.prev = null;
			}
			this.size--;
		} else {
			let count = 0;
			let prev;
			while (count < index) {
				prev = curr;
				curr = curr.next;
				count++;
			}
			if (index === this.size - 1) {
				prev.next = null;
				this.size--;
				return;
			}
			prev.next = curr.next;
			curr.next.prev = prev;
			this.size--;
		}
	}

	display() {
		let curr = this.head;
		while (curr) {
			console.log(curr.data);
			// if (curr.next) {
			// 	console.log(curr.next.data);
			// }
			// if (curr.prev) {
			// 	console.log(curr.prev.data);
			// }
			curr = curr.next;
		}
	}
}

const ll1 = new LinkedList();
ll1.insertFirst(10);
ll1.insertFirst(20);
ll1.insertFirst(30);
ll1.insertLast(40);
ll1.insertAtIndex(50, 3);
ll1.deleteNode(4);
console.log(ll1.size);
ll1.display();
