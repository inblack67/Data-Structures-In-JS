class Queue {
	constructor() {
		this.elements = [];
		this.size = this.elements.length;
	}
	enqueue(el) {
		this.elements.push(el);
	}
	dequeue() {
		this.elements.shift();
	}
	display() {
		console.log(this.elements);
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.display();
