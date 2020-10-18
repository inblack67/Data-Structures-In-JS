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
			this.head.next = this.head;
			this.size++;
			return;
		}
		newNode.prev = this.head.prev;
		newNode.next = this.head;
		let curr = this.head;
		while (curr.next !== this.head) {
			curr = curr.next;
		}
		curr.next = newNode;
		this.head = newNode;
		this.size++;
	}
	insertLast(data) {
		const newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.head.next = this.head;
			this.size++;
			return;
		}
        let curr = this.head;
        while(curr.next !== this.head){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.prev = curr;
        newNode.next = this.head;
		this.size++;
	}

	deleteNode(index) {
		if (index > this.size - 1 || !this.head) {
			return;
		}
		let curr = this.head;
		if (index === 0) {
            this.head = curr.next;
			if (this.head) {
				this.head.prev = curr.prev;
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
				prev.next = curr.next;
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
		do {
			console.log(curr.data);
			curr = curr.next;
		} while (curr !== this.head);
	}
}

const ll1 = new LinkedList();
ll1.insertFirst(10);
ll1.insertFirst(20);
ll1.insertFirst(30);
ll1.insertLast(40);
ll1.insertLast(50);
ll1.insertLast(60);
ll1.deleteNode(2);
console.log(ll1.size);
ll1.display();
