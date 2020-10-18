// O(2^n)
const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

// O(n)
const memoizedFibonacci = (n) => {
	const arr = new Array(n);
	if (n <= 1) {
		arr[n] = n;
		return n;
	}
	if (!arr[n - 1]) {
		arr[n - 1] = memoizedFibonacci(n - 1);
	}

	if (!arr[n - 2]) {
		arr[n - 2] = memoizedFibonacci(n - 2);
	}

	return arr[n - 1] + arr[n - 2];
};

// O(n)
const iterationFibonacci = (n) => {
	if (n <= 1) {
		return n;
	}
	let t0 = 0,
		t1 = 1,
		sum = 0;
	for (let i = 2; i <= n; i++) {
		sum = t0 + t1;
		t0 = t1;
		t1 = sum;
	}
	return sum;
};

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

console.log(fibonacci(5));
console.log(iterationFibonacci(5));
console.log(memoizedFibonacci(5));
console.log(factorial(5));
