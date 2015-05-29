// describe ("findWord", function (phrase, wordToFind) {
// 	it("will find a specific word from an input string", function(){
// 		expect(findWord("ian is cool", "ian")).to.eql(["ian"]);
// 	});
// });

describe("findAndReplace", function (phrase, wordToReplace, replaceWith) {
	it("will replace found word in phrase with a desired word", function() {
		expect(findAndReplace("ian is cool", "cool", "awesome")).to.equal("ian is awesome");
	});

});