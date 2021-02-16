function snakeCaseString(phrase) {
	if (phrase.includes('_') === false) {
		return 0;
	}
	let wordsNumber = 1;
	for (let position in phrase) {
		if (phrase.charAt(position) === '_') {
			wordsNumber++;
		}
	}
	return wordsNumber;
}

function checkResults(camelString, expectedResult, func) {
	const numWords = func(camelString);
	if (numWords == expectedResult) {
		console.log('👍');
	} else {
		console.log('👎 ' + camelString + ' Expected result: ' + expectedResult + ' vs ' + numWords);
	}
}

checkResults('wop_wop', 2, snakeCaseString);
checkResults('wop_wop_wop', 3, snakeCaseString);
checkResults('', 0, snakeCaseString);
checkResults(' wew _wew', 2, snakeCaseString);
checkResults(' ', 0, snakeCaseString);
checkResults('         ', 0, snakeCaseString);
checkResults('_', 0, snakeCaseString);
checkResults('________', 0, snakeCaseString);
checkResults('wop', 1, snakeCaseString);
// checkResults('___a_____', 1, snakeCaseString);
checkResults('_ _ ', 2, snakeCaseString);
