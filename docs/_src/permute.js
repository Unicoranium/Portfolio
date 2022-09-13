function permute(input, usedChars, permArr) {
	var i, ch;
	for (i = 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		usedChars.push(ch);
		if (input.length == 0) {
			permArr.push(usedChars.slice());
		}
		permute(input, usedChars, permArr);
		input.splice(i, 0, ch);
		usedChars.pop();
	}
	return permArr;
};

onmessage = function(e) {
	postMessage(permute(e.data, [], []));
}