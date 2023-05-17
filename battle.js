class Card {
    constructor(cardSuit, cardFace, cardValue) {
        this.cardSuit = cardSuit
        this.cardFace = cardFace
        this.cardValue = cardValue
    }

    get color() {
        return this.cardSuit === '♣' || this.cardSuit === '♠' ? 'black' : 'red'
    }

    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.cardSuit
        cardDiv.classList.add('card', this.color)
        cardDiv.dataset.value = `${this.cardFace} ${this.cardSuit}`
        return cardDiv
    }
    
}

class Deck {
    constructor() {
        this.cardDeck = []
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

//let practiceDeck = new Deck()
//console.log(practiceDeck.makeDeck())

// Class used for creating player objects; each player needs a name, a pile of 26 cards
class Player {
    constructor() {
        this.name = name
        this.cardPile = []
        this.score = []
    }
}

// Class for creating each game
class Battle {
    constructor (player1, player2) {
        this.player1 = new Player(player1)
        this.player2 = new Player(player2)
        this.dealCards()
    }
 
    dealCards() {
        let deck = new Deck()
        this.player1.cardPile = new Deck(deck.cardDeck.slice(0,26))
        let p1Pile = this.player1.cardPile
        this.player2.cardPile = new Deck(deck.cardDeck.slice(26,52))
        let p2Pile = this.player2.cardPile

        console.log(p1Pile)
        console.log(p2Pile)
    }

    playBattle() {   
        let p1Card = p1Pile.flipCard()
        let p2Card = p2Pile.flipCard()
        
        let p1Deck = document.querySelector('.p1-deck')
        let p2Deck = document.querySelector('.p2-deck')
        
        p1Deck.appendChild(p1Card.getHTML())
        p2Deck.appendChild(p2Card.getHTML())

        let result = document.querySelector('.result')
        
        while (p1Pile > 0 && p2Pile > 0) {
            if (p1Card > p2Card) {
                p1Score.push(1)
                result.innerText = 'Player 1 wins the battle!'
            } else if (p1Card < p2Card) {
                p2Score.push(1)
                result.innerText = 'Player 2 wins the battle!'
            } else {
                result.innerText = 'Tie! No points awarded.'
            }
        }
     }

     flipCard() {
        return this.cards.shift()
    }
    
     declareWinner () {
         let p1TotalPoints = p1Pile.reduce((x, y) => x + y, 0)
         let p2TotalPoints = p2Pile.reduce((x, y) => x + y, 0)
 
         if (p1TotalPoints > p2TotalPoints) {
             result.innerText = 'Player 1 wins the war!'
         } else if (p1TotalPoints < p2TotalPoints) {
            result.innerText = 'Player 2 wins the war!'
         } else {
            result.innerText = 'Tie! Neither player wins'
         }
     }  
}

let battle = new Battle()
battle.playBattle()




