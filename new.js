class Card {
    constructor(cardSuit, cardFace, cardValue) {
        this.cardSuit = cardSuit
        this.cardFace = cardFace
        this.cardValue = cardValue
    }
    
}

class Deck {
    constructor() {
        this.cardDeck = []
    }

    get cardsNumber() {
        return this.cardDeck.length
    }

    makeDeck() {
        this.makeCards()
        this.shuffleDeck()
        return this.cardDeck
    }

    makeCards () {  
        const cardSuits = ['♣', '♠', '♦', '♥']
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

        //this.cardSuit === '♣' || this.cardSuit === '♠' ? 'black' : 'red'
    
        // Iterate through card property arrays and create cards 
        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardFaces.length; j++) {
                this.cardDeck.push(new Card(cardFaces[j], cardSuits[i], cardValues[j]))
            }
        }
    }

    shuffleDeck() {
        for (let i = this.cardsNumber - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldIndex = this.cardDeck[newIndex]
            this.cardDeck[newIndex] = this.cardDeck[i]
            this.cardDeck[i] = oldIndex
        }
    }
}

/* let practiceDeck = new Deck()
console.log(practiceDeck.makeDeck()) */


