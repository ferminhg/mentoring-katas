function factorial(n) {
	if (n < 1) {
		return 1;
	} else if (n < 10) {
		return n * factorial(n - 1);
	}
}
console.log(factorial(4));
