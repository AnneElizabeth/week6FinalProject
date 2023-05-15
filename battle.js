/* 
- Deal 26 Cards to each Player from a Deck of 52 cards.
- Iterate through the turns where each Player plays a Card.
- The Player who played the higher card is awarded a point
- Ties result in zero points for both Players
- After all cards have been played, display the score and declare the winner.
 - Write  a Unit Test using Mocha and Chai for at least one of the functions you write.
 */

 // Card players created from CardPlayer class
 // Each card player object needs a name, a pile of 26 cards to play, and a score
 // Card pile is an array of 26 cards
 // Total points tally starts at 0
 class CardPlayer {
    constructor (playerName) {
        this.playerName = playerName
        this.cardPile = []
        this.score = 0
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
}r

 // Card deck(s) created from CardDeck class
 
class CardDeck {
 
    // Each instance of a card deck needs an array of 52 card objects, each with an assigned suit and face, each with a point value
    constructor() {
        this.cardDeck = []
    }

    // JS getter method for accessing property values of card objects
    get getCards() {
        return this.cardDeck
    }

     // Create 52 card objects for a deck
     // Arrays of card properties will be merged together into one array, declared with const because elements won't change
    
     makeCards () {  
        const cardSuits = ['\u2665', '\u2666', '\u2663', '\u2660']
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
        
        // Iterate through card property arrays and create cards 
        for (let i = 0; i < cardSuits.length; i++) {
            for (let j = 0; j < cardFaces.length; j++) {
                this.cardDeck.push(new Card(cardFaces[j], cardSuits[i], cardValues[j]))
            }
        }
    }

    // Class method for shuffling deck after each game
    //https://flaviocopes.com/how-to-shuffle-array-javascript/

    shuffleCardDeck () {
        if (this.cardDeck.length >0) {
            const shuffledDeck = this.cardDeck.sort(() => Math.random() - 0.5)
            this.cardDeck = [...shuffledDeck]
        }
    }

    // After cards are created, need to create a deck object and shuffle it
    makeDeck() {
        this.makeCards()
        this.shuffleDeck()
        return this.cardDeck
    }

    // Class method for dealing card deck, 26 card objects to each player
    dealCards (player1, player2) {
        player1.cardPile = [...this.cardDeck.slice(0,26)]
        player2.cardPile = [...this.cardDeck.slice(27,52)]
    }
}


// Create class for running the card game
class WarGame {
    // Create array to store each player object
    constructor() {
        this.players = []
    }

    // Method for creating each player
    createPlayer(player) {
        let playerName = prompt(`Enter the name of the player ${player}.`, `${player}`)

        this.players.push(new player(playerName))

        let playerDiv = document.querySelector('#' + player)
        playerDiv.textContent = playerName
    }

    // Method for starting the card game
    start() {
        document.querySelector('#playButton').disabled = true
        
        // Create each player
        this.createPlayer('1')
        this.createPlayer('2')

        // Create new deck of cards, shuffle, deal 
        let newCardDeck = new CardDeck
        newCardDeck.shuffleCardDeck()
        newCardDeck.dealCards(this.players[0], this.players[1])

        this.goToWar(this.players[0], this.players[1])
        
        // Game begins

        // Create variables for HTML game display
        let playerOneTally = document.querySelector('.playerOneTally')
        let playerTwoTally = document.querySelector('.playerTwoTally')
        let tallyTracker = document.querySelector('.playerTallies')
        let playerOneTotalTally = document.querySelector('#playerOneTotalTally')
        let playerTwoTotalTally = document.querySelector('#playerTwoTotalTally')

        // Iterate through each player's card pile and tally points
        for (let i = 0; i < this.players[0].cardPile.length; i++) {
            let playerOneCard = playerOne.cardPile[i]
            let playerTwoCard = playerTwo.cardPile[i]

            this.showPlayerOneCard(playerOneTally, playerOneCard)
            this.showPlayerTwoCard(playerTwoTally, playerTwoCard)

            if (playerOneCard.cardValue > playerTwoCard.cardValue) {
                this.showTally(`${playerOne.playerName} wins the battle!`, tallyTracker)
                playerOne.pointsTally++
            } else if (playerOneCard.cardValue < playerTwoCard.cardValue) {
                this.showTally(`${playerTwo.playerName} wins the battle!`, tallyTracker)
                playerTwo.pointsTally++
            } else if (playerOneCard.cardValue === playerTwoCard.cardValue) {
                this.showTally(`Tie! No points earned.`, tallyTracker)
            }

            playerOneTotalTally.innerHTML = `Points tallied: ${playerOne.pointsTally}`
            playerTwoTotalTally.innerHTML = `Points tallied: ${playerTwo.pointsTally}`
        }

        // Determine winner
        if (playerOne.pointsTally > playerTwo.pointsTally) {
            warwinner.innerHTML = `${playerOne.playerName} wins the war!`
        } else if (playerOne.pointsTally < playerTwo.pointsTally) {
            warwinner.innerHTML = `${playerTwo.playerName} wins the war!`
        } else if (playerOne.pointsTally === playerTwo.pointsTally) {
            warwinner.innerHTML = `It's a tie - no one wins the war.`
        }

    }

    // Play again
    // Convert beginButton to replayButton
}

let warGame  = new WarGame()
warGame


