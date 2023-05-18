let expect = chai.expect
let assert = chai.assert

describe ('Game Functions', function() {
    describe('#shuffleDeck', function() {
        it('should create an array of 52 cards that does not match the previous array', function() {
            let originalDeck = new Deck()
            let shuffledDeck = new Deck()

            let doTheShuffle = shuffledDeck.shuffleDeck()
            assert.notEqual(doTheShuffle, originalDeck)
        })
    })
})