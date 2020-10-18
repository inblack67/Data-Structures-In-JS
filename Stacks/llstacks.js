class Node {
	next;
	data;
	constructor(data, next = null) {
		this.next = next;
		this.data = data;
	}
}

class Stack {
	top;
	size;
	constructor() {
		this.top = null;
		this.size = 0;
	}
	push(el) {
		const newNode = new Node(el);
		newNode.next = this.top;
		this.top = newNode;
	}
	pop() {
		this.top = this.top.next;
	}
	display() {
		let curr = this.top;
		while (curr) {
			console.log(curr.data);
			curr = curr.next;
		}
	}
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.pop();
s1.pop();
s1.display();
