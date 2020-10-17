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
	display() {
		let curr = this.head;
		while (curr) {
			console.log(curr.data);
			if (curr.next) {
				console.log(curr.next.data);
			}
			if (curr.prev) {
				console.log(curr.prev.data);
			}
			curr = curr.next;
		}
	}
}

const ll1 = new LinkedList();
ll1.insertFirst(10);
ll1.insertFirst(20);
ll1.insertFirst(30);
ll1.display();
