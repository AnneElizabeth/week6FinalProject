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

// Class used for creating player objects; each player needs a name a pile of 26 cards
class Player {
    constructor() {
        this.cardPile = []
    }
}

// Class for creating each game
class Battle {
    constructor () {
        this.deck = new Deck()
        this.player1 = new Player(player1)
        this.player2 = new Player(player2)
        this.p1Pile = []
        this.p2Pile = []
    }

    dealCards() {
        let p1Pile, p2Pile
        
        p1Pile = new Deck(deck.cardDeck.slice(0,26))
        p2Pile = new Deck(deck.cardDeck.slice(26,52))
    }

    /* showCardPiles() {
        display card piles
    } */
    
    playBattle() {
        let p1Card, p2Card, p1Score, p2Score
        p1Score = []
        p2Score = []
        
       while (p1Pile > 0 && p2Pile > 0) {
            p1Card = this.p1Pile.shift()
            p2Card = this.p2Pile.shift()

            if (p1Card > p2Card) {
                p1Score.push(1)
                console.log('Player 1 wins the battle!')
            } else if (p1Card < p2Card) {
                p2Score.push(1)
                console.log('Player 2 wins the battle!')
            } else {
                console.log('Tie! No points awarded.')
            }
        }
    }

    declareWinner () {
        let p1TotalPoints = p1Pile.reduce((x, y) => x + y, 0)
        let p2TotalPoints = p2Pile.reduce((x, y) => x + y, 0)

        if (p1TotalPoints > p2TotalPoints) {
            console.log('Player 1 wins the war!')
        } else if (p1TotalPoints < p2TotalPoints) {
            console.log('Player 2 wins the war!')
        } else {
            console.log('Tie! Neither player wins')
        }
    }
}

let battle = new Battle()
battle.playBattle()




