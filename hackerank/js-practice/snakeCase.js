function snakeCaseString(phrase) {
	return phrase.split('_').length;
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
checkResults('___a_____', 1, snakeCaseString);
checkResults('_ _ ', 2, snakeCaseString);
checkResults('wop_wop', 2, snakeCaseString);
checkResults('', 0, snakeCaseString);
checkResults('_', 0, snakeCaseString);
checkResults('eli_js_code', 3, snakeCaseString);
checkResults('wop', 1, snakeCaseString);
