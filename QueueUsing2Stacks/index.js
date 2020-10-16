class Stack {
	constructor() {
		this.items = [];
		this.size = this.items.length;
	}

	push(el) {
		this.items.push(el);
	}

	pop() {
		return this.items.pop();
	}

	isEmpty() {
		return this.size === 0;
	}

	clearStack() {
		this.items = [];
		console.log(`Stack cleared`);
	}

	display() {
		console.log(this.items);
	}
}

class Queue {
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	enqueue(el) {
		this.stack1.push(el);
	}
	dequeue() {
		if (!this.stack2.size) {
			while (this.stack1.items.length) {
				this.stack2.push(this.stack1.pop());
			}
		}
		return this.stack2.pop();
	}
}

const que = new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
console.log(que.dequeue());
console.log(que.dequeue());
// console.log(que.dequeue());
que.enqueue(40);
que.enqueue(50);
