// describe ("findWord", function (phrase, wordToFind) {
// 	it("will find a specific word from an input string", function(){
// 		expect(findWord("ian is cool", "ian")).to.eql(["ian"]);
// 	});
// });

describe("findAndReplace", function (phrase, wordToReplace, replaceWith) {
	it("will replace found word in phrase with a desired word", function() {
		expect(findAndReplace("ian is cool", "cool", "awesome")).to.equal("ian is awesome");
	});

	it("will replace multiple instances of wordToReplace with replaceWith", function() {
		expect(findAndReplace("ian is cool, so cool", "cool", "awesome")).to.equal("ian is awesome, so awesome");
	});

	it("will change all instances of wordToReplace with replaceWith", function() {
		expect(findAndReplace("cool cool cool cool", "cool", "awesome")).to.equal("awesome awesome awesome awesome");
	});
});