function camelCaseString(s) {
	let wordsNumber = 1;
	for (let i in s) {
		if (s.charAt(i) === s.charAt(i).toUpperCase()) {
			wordsNumber++;
		}
	}
	return wordsNumber;
}

console.log(camelCaseString('saveChangesInTheEditor'));
