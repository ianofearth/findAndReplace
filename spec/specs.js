describe ("findWord", function (phrase, wordToFind) {
	it("will find a specific word from an input string", function(){
		expect(findWord("ian is cool", "ian")).to.eql(["ian"]);
	});

});