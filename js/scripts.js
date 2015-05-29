var findAndReplace = function(phrase, wordToReplace, replaceWith) {
	var phrase = phrase;
	var phraseLength = phrase.split(" ").length;
	var wordToReplace = wordToReplace;
	var replaceWith = replaceWith;
	var replaced = ""
	var i = 0
	
	while (i < phraseLength) {
		replaced = phrase.replace(wordToReplace, replaceWith);
		i += 1;
		phrase = replaced;
	} return replaced;
};

$(document).ready(function() {
	$("form#userEntry").submit(function(event) {
		var phraseEntered = $("input#phraseEntered").val();
		var wordToReplace = $("input#wordToReplace").val();
		var replaceWith = $("input#replaceWith").val();
		var result = findAndReplace(phraseEntered, wordToReplace, replaceWith)

		$(".replacedPhrase").text(result);

		$("#result").show();

		event.preventDefault();
	});
});

// var findAndReplace = function(phrase, wordToReplace, replaceWith) {
// 	var splitPhrase = phrase.split(" ")
// 	var wordToReplace = wordToReplace
// 	var replaceWith = replaceWith
// 	splitPhrase.forEach(function(word) {
// 		if(wordToReplace === word) {
// 			splitPhrase.replace(word, replaceWith)
// 		}

// 	});
// 	return splitPhrase.join();

// }


// var findWord = function(phrase, wordToFind) {
// 	var splitPhrase = phrase.split(" ");
// 	var wordToFind = wordToFind
// 	var foundWord = []
// 	splitPhrase.forEach(function(word) {
// 		if(wordToFind === word) {
// 			foundWord.push(word)

// 		}
// 	});return foundWord

// }