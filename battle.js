// Class for creating a card object with a suit, face, and value
class Card {
    constructor(cardSuit, cardFace, cardValue) {
        this.cardSuit = cardSuit
        this.cardFace = cardFace
        this.cardValue = cardValue
    } 
}

// Class for creating a deck of cards - an array of 52 card objects - and shuffling it
class Deck {
    constructor() {
        this.cardDeck = []
    }

    // Method for creating deck of 52 cards
    makeCards () {  
        const cardSuits = ['♣', '♠', '♦', '♥']
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    
        // Iterate through card property arrays and create cards 
        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardFaces.length; j++) {
                this.cardDeck.push(new Card(cardFaces[j], cardSuits[i], cardValues[j]))
            }
        }
    }

// Credit for shuffleDeck method: https://www.youtube.com/@WebDevSimplified
    shuffleDeck() {
        for (let i = this.cardDeck.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldIndex = this.cardDeck[newIndex]
            this.cardDeck[newIndex] = this.cardDeck[i]
            this.cardDeck[i] = oldIndex
        }
    }
}

// Class creating player objects, each with a name, a pile of cards, and a score
class Player {
    constructor(name) {
        this.name = name
        this.cardPile = []
        this.score = []
    }
}

// Class for creating each game of Battle
class Battle {
    constructor (player1, player2) {
        this.player1 = new Player(player1)
        this.player2 = new Player(player2)
    }
 
    // Method for dealing 26 cards to each player
    dealCards() {
        let deck = new Deck()
        deck.makeCards()
        deck.shuffleDeck()

        this.player1.cardPile = deck.cardDeck.slice(0,26)
        this.player2.cardPile = deck.cardDeck.slice(26,52)

        console.log(this.player1.cardPile)
        console.log(this.player2.cardPile)
    }

    // Method for playing the game - each player draws a card, cards are compared, and points are awarded dependent on the outcome
    playBattle() {          
         while (this.player1.cardPile.length > 0 && this.player2.cardPile.length > 0) {
            let p1Card = this.player1.cardPile.shift().cardValue
            let p2Card = this.player2.cardPile.shift().cardValue 
            
            console.log(`Player 1's card: ${p1Card}`)
            console.log(`Player 2's card: ${p2Card}`)

            if (p1Card > p2Card) {
                this.player1.score.push(1)
                console.log('Player 1 wins the battle!')
            } else if (p1Card < p2Card) {
                this.player2.score.push(1)
                console.log('Player 2 wins the battle!')
            } else {
                console.log('Tie! No points awarded.')
            }
        }
     }

     // Method that declares the winner of the War - the player who won the most battles
     declareWinner () {
         let p1TotalPoints = this.player1.score.reduce((x, y) => x + y, 0)
         let p2TotalPoints = this.player2.score.reduce((x, y) => x + y, 0)
 
         if (p1TotalPoints > p2TotalPoints) {
             console.log(`Player 1 wins the war with ${p1TotalPoints} points! Player 2 only had ${p2TotalPoints} points. `)
         } else if (p1TotalPoints < p2TotalPoints) {
            console.log(`Player 2 wins the war with ${p2TotalPoints} points! Player 1 only had ${p1TotalPoints} points. `)
        } else {
            console.log('Tie! Neither player wins. How boring!')
         }
     }  
}

// Invoking game methods
let battle = new Battle()
battle.dealCards()
battle.playBattle()
battle.declareWinner()




