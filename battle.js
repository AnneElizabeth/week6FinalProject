/* 
- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point
- Ties result in zero points for both Players
- After all cards have been played, display the score and declare the winner.
 - Write  a Unit Test using Mocha and Chai for at least one of the functions you write.
 */

 
// Class used for creating card objects
// Each card object needs a suit, a face, and a point value
class Card {
    constructor(cardSuit, cardFace, cardValue) {
        this.cardSuit = cardSuit
        this.cardFace = cardFace
        this.cardValue = cardValue
    }

    // Getter for displaying spades and clubs as black, diamonds and hearts as red
    get color() {
        return this.cardSuit === '♣' || this.cardSuit === '♠' ? 'black' : 'red'

    }

    // Getter for displaying cards
    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerText = this.cardSuit
        cardDiv.classList.add('card', this.color)
        cardDiv.dataset.value = `${this.cardFace} ${this.cardSuit}`
        return cardDiv
    }
}
 
 // Card deck(s) created from CardDeck class
 
class Deck {
    constructor() {
        this.cardDeck = []
    }

    get cardsNumber() {
        return this.cardDeck.length
    }

    drawCard() {
        return this.cardDeck.shift()
    }

    /* discardCard() {
        this.cardDeck.push()
    } */

    // Create 52 card objects for a deck
    // Each instance of a card deck needs an array of 52 card objects, each with an assigned suit and face, each with a point value
    // Arrays of card properties will be merged together into one array, declared with const because elements won't change
    
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

    // After cards are created, need to create a deck object and shuffle it
    makeDeck() {
        this.makeCards()
        this.shuffleDeck()
        return this.cardDeck
    }
    // Class method for shuffling deck after each game
    //https://flaviocopes.com/how-to-shuffle-array-javascript/

    /* shuffleCardDeck () {
        if (this.cardDeck.length >0) {
            const shuffledDeck = this.cardDeck.sort(() => Math.random() - 0.5)
            this.cardDeck = [...shuffledDeck]
        }
    } */

    shuffleDeck() {
        for (let i = this.cardsNumber - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldIndex = this.cardDeck[newIndex]
            this.cardDeck[newIndex] = this.cardDeck[i]
            this.cardDeck[i] = oldIndex
        }
    }

    // Class method for dealing card deck, 26 card objects to each player
/*     dealCards (playerOne1, player2) {
        playerOneOneOneOne1.cardPile = [...this.cardDeck.slice(0,26)]
        playerOne2.cardPile = [...this.cardDeck.slice(27,52)]
    } */
}

 // Card players created from CardplayerOne class
 // Each card player object needs a name, a pile of 26 cards to play, and a score
 // Card pile is an array of 26 cards
 // Total points Score starts at 0
 class CardPlayer {
    constructor (playerName) {
        this.playerName = playerName
        this.cardPile = []
        this.score = 0
    }
 }

// Create class for running the card game
class Battle {
     // Variables used for displaying the cards
        let playerTwoCardPile = document.querySelector('.p2-card-pile')
        let playerOneCardPile = document.querySelector('.p1-card-pile')
        let playerTwoDeckElement = document.querySelector('.p2-deck')
        let playerOneDeckElement = document.querySelector('.p1-deck')
        let result = document.querySelector('.result')
    
    // Method that begins the game
    
    startGame() {
        
  
        let playerOneDeck, playerTwoDeck, gameStarted
        
        const deck = new Deck()
        deck.shuffle()
        dealCards()
    }

        // Class method for dealing card deck, 26 card objects to each playerOne
        dealCards() {
            playerOneDeck = new Deck(deck.cardDeck.slice(0,26))
            playerTwoDeck = new Deck(deck.cardDeck.slice(26,52))
            //gameStarted = false
            //gameOver = false

            console.log(playerOneDeck)
            console.log(playerTwoDeck)

            clearTable()
        }

        clearTable () {
            //gameStarted = false
            playerTwoCardPile.innerHTML = ''
            playerOneCardPile.innerHTML = ''
            result.innerText = '' 

            updateDeckCount()
        }

        updateDeckCount() {
            playerTwoDeckElement.innerText = playerTwoDeck.cardsNumber
            playerOneDeckElement.innerText = playerOneDeck.cardsNumber
        }

        flipCards() {
            //gameStarted = true

            const playerOneCard = playerOneDeck.drawCard()
            const playerTwoCard = playerTwoDeck.drawCard()

            playerOneCardPile.appendChild(playerOneCard.getHTML())
            playerTwoCardPile.appendChild(playerTwoCard.getHTML())

            updateDeckCount()
            
            if (playerOneCard > playerTwoCard) {
                result.innerText = 'Player 1 wins the battle!'
                playerOneDeck.push(playerOneCard)
                playerOneDeck.push(playerOneTwoCard)
            } else if (isWinner(playerTwoCard, playerOneCard)) {
                result.innerText = 'playerOne 1 loses the battle!'
                playerOneTwoDeck.push(playerOneCard)
                playerOneTwoDeck.push(playerOneTwoCard)
            } else {
                result.innerText = 'Tie battle!'
                playerOneDeck.push(playerOneCard)
                playerOneTwoDeck.push(playerOneTwoCard)
            }

            if (gameOver(playerOneDeck)) {
                result.innerText = 'playerOne 1 loses the war!'
                gameOver = true
            } else if (gameOver(playerTwoDeck)) {
                result.innerText = 'playerOne 1 wins the war!'
                gameOver = true
            }

        }
    }

   /*  isWinner(cardOne, cardTwo) {
        return cardValuesMap[cardOne.value] > cardValuesMap[cardTwo.value]
    }

    gameOver (deck) {
        return deck.cardsNumber === 0
    } */
    
   /* 
        let playerOneScore = document.querySelector('.p1-score')
        let playerTwoScore = document.querySelector('.p2-score')
        let scoreTracker = document.querySelector('.p1-points')
        let playerOneTotalScore = document.querySelector('#p1-total-score')
        let playerTwoTotalScore = document.querySelector('#p2-total-score')

        // Iterate through each playerOne's card pile and Score points
        for (let i = 0; i < this.playerOnes[0].cardPile.length; i++) {
            let playerOneCard = playerOne.cardPile[i]
            let playerTwoCard = playerTwo.cardPile[i]

            this.showplayerOneCard(playerOneScore, playerOneCard)
            this.showplayerOneTwoCard(playerTwoScore, playerTwoCard)

            if (playerOneCard.cardValue > playerTwoCard.cardValue) {
                this.showScore(`${playerOneOne.playerOneName} wins the battle!`, scoreTracker)
                playerOne.pointsScore++
            } else if (playerOneCard.cardValue < playerTwoCard.cardValue) {
                this.showScore(`Player 1 wins the battle!`, ScoreTracker)
                playerTwo.pointsScore++
            } else if (playerOneCard.cardValue === playerTwoCard.cardValue) {
                this.showScore(`Tie! No points earned.`, ScoreTracker)
            }

            playerOneTotalScore.innerHTML = `Points tallied: ${playerOne.pointsScore}`
            playerTwoTotalScore.innerHTML = `Points tallied: ${playerTwo.pointsScore}`
        }

        // Determine winner
        if (playerOne.pointsScore > playerTwo.pointsScore) {
            warwinner.innerHTML = `Player 1 wins the war!`
        } else if (playerOne.pointsScore < playerTwo.pointsScore) {
            warwinner.innerHTML = `Player 2 wins the war!`
        } else if (playerOne.pointsScore === playerTwo.pointsScore) {
            warwinner.innerHTML = `It's a tie - no one wins the war.`
        }

    }
 */
    // Play again
    // Convert beginButton to replayButton


//let battle  = new Battle()
//battle

