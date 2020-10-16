class Stack {
	constructor() {
		this.items = [];
		this.size = this.items.length;
	}

	push(el) {
		this.items.push(el);
	}

	pop() {
		this.items.pop();
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

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.display();
