var findWord = function(phrase, wordToFind) {
	var splitPhrase = phrase.split(" ");
	var wordToFind = wordToFind
	var foundWord = []
	splitPhrase.forEach(function(word) {
		if(wordToFind === word) {
			foundWord.push(word)

		}
	});return foundWord

}