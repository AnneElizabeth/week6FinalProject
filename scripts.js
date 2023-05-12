/* 
- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point
- Ties result in zero points for both Players
- After all cards have been played, display the score and declare the winner.
 - Write  a Unit Test using Mocha and Chai for at least one of the functions you write.
 */

 // Card players created from CardPlayer class
 // Each card player object needs a name, a pile of 26 cards to play, and a total points tally
 // Card pile is an array of 26 cards
 // Total points tally starts at 0
 class CardPlayer {
    constructor (playerName) {
        this.playerName = playerName
        this.cardPile = []
        this.pointsTally = 0
    }
 }

// Cards created from Card class
// Each card instance needs a suit, a face, and a point value
class Card {
    constructor(cardSuit, cardFace, cardValue) {
        this.cardSuit = cardSuit
        this.cardFace = cardFace
        this.cardValue = cardValue
    }
}

 // Card deck(s) created from CardDeck class
 // Each instance of a card deck needs an array of 52 card objects, each with an assigned suit and face, each with a point value
class CardDeck {
    constructor() {
        this.cardDeck = []
    }

    // Class method to create cards for the card deck
    createCards() {
        // Create arrays of card properties: suits, card faces, card values; use const because elements won't change
        const cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

        // Iterate through card property arrays and create cards with one of each property
        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardFaces.length; j++) {
                this.cardDeck.push(new Card(cardFaces[j], cardSuits[i], cardValues[j]))
            }
        }
    }

    // Class method for shuffling the card deck after each game
    shuffleCardDeck(cardDeck) {
        for (let i = cardDeck.length - 1; i > 0; i--) {
            const shuffledCardDeck = Math.floor(Math.random() * (i + 1))
            [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
            this.cardDeck = [...shuffledCardDeck]
        }
    }

    // Class method for creating card deck
    createCardDeck () {
        this.createCards()
        this.shuffleCardDeck()
        return this.cardDeck
    }

    // Class method for dealing card deck, 26 card objects to each player
    dealCards (player1, player2) {
        player1.cardPile = [...this.cardDeck.slice(0,26)]
        player2.cardPile = [...this.cardDeck.slice(27,52)]
    }
}

// Create class for running the card game
class War {
    // Create array to store each player object
    constructor() {
        this.players = []
    }

    // Method for creating each player
    createPlayer(player) {
        let player1 = prompt(`Enter the name of the first player: ${player1}`)
    }

    // Method for starting the card game
    start() {
        // Create each player

        // Shuffle card deck

        // Deal cards

        // Iterate through each player's card pile and tally points

        // Determine winner

        // Reload and play again
    }
}

let war  = new War()
war()


