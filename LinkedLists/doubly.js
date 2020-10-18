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
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.size++;
			return;
		}
		this.head.prev = newNode;
		newNode.next = this.head;
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
		if (index > this.size - 1) {
			console.log(`Index is invalid`);
			return;
		}
		if (index === 0) {
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
		curr.prev = newNode;
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

	reverse() {
		if (this.size <= 1) {
			return;
		}
		let curr = this.head;
		let temp;
		while (curr) {
			temp = curr.next;
			curr.next = curr.prev;
			curr.prev = temp;
			curr = curr.prev;
			if (curr && !curr.next) {
				this.head = curr;
			}
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
ll1.reverse();
ll1.deleteNode(4);
console.log(ll1.size);
ll1.display();
