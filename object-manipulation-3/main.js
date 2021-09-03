console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
    {
   "name": "player1",
        "hand": []
    },
    {
        "name": "player2",
        "hand": []
    },
    {
        "name": "player3",
        "hand": []
    },
    {
        "name": "player4",
        "hand": []
    },
]
var deck = [
    {"rank":"Ace", "suit":"clubs"},
    {"rank":"2", "suit":"clubs"},
    {"rank":"3", "suit":"clubs"},
    {"rank":"4", "suit":"clubs"},
    {"rank":"5", "suit":"clubs"},
    {"rank":"6", "suit":"clubs"},
    {"rank":"7", "suit":"clubs"},
    {"rank":"8", "suit":"clubs"},
    {"rank":"9", "suit":"clubs"},
    {"rank":"10", "suit":"clubs"},
    {"rank":"Jack", "suit":"clubs"},
    {"rank":"Queen", "suit":"clubs"},
    {"rank":"King", "suit":"clubs"},
    { "rank": "Ace", "suit": "diamonds" },
    { "rank": "2", "suit": "diamonds" },
    { "rank": "3", "suit": "diamonds" },
    { "rank": "4", "suit": "diamonds" },
    { "rank": "5", "suit": "diamonds" },
    { "rank": "6", "suit": "diamonds" },
    { "rank": "7", "suit": "diamonds" },
    { "rank": "8", "suit": "diamonds" },
    { "rank": "9", "suit": "diamonds" },
    { "rank": "10", "suit": "diamonds" },
    { "rank": "Jack", "suit": "diamonds" },
    { "rank": "Queen", "suit": "diamonds" },
    { "rank": "King", "suit": "diamonds" },
    { "rank": "Ace", "suit": "hearts" },
    { "rank": "2", "suit": "hearts" },
    { "rank": "3", "suit": "hearts" },
    { "rank": "4", "suit": "hearts" },
    { "rank": "5", "suit": "hearts" },
    { "rank": "6", "suit": "hearts" },
    { "rank": "7", "suit": "hearts" },
    { "rank": "8", "suit": "hearts" },
    { "rank": "9", "suit": "hearts" },
    { "rank": "10", "suit": "hearts" },
    { "rank": "Jack", "suit": "hearts" },
    { "rank": "Queen", "suit": "hearts" },
    { "rank": "King", "suit": "hearts" },
    { "rank": "Ace", "suit": "spades" },
    { "rank": "2", "suit": "spades" },
    { "rank": "3", "suit": "spades" },
    { "rank": "4", "suit": "spades" },
    { "rank": "5", "suit": "spades" },
    { "rank": "6", "suit": "spades" },
    { "rank": "7", "suit": "spades" },
    { "rank": "8", "suit": "spades" },
    { "rank": "9", "suit": "spades" },
    { "rank": "10", "suit": "spades" },
    { "rank": "Jack", "suit": "spades" },
    { "rank": "Queen", "suit": "spades" },
    { "rank": "King", "suit": "spades" }  
]
console.log(deck);
var shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);
// Add two cards to each players hands ._random()
// function getRandomCard(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
// }
// var randomNumber = getRandomCard(0,52);
// console.log(randomNumber);
var card1;
var card2;
for(var i = 0; i < players.length; i++){
        card1 = _.random(0,52)
        players[i].hand.push(shuffledDeck[card1]);
        
    }

console.log(players);

/*
1. Create an array of 4 objects
    -Unique names and hands for each
2. Create a collection of 52 objects representing card-deck
    -Each should have a rank (Ace,2,...) and suit (clubs, spades)
3.Shuffled Deck
4. Deal 2 cards to each player
    -Remove the object property and give 2 to each player

https://lodash.com/docs/4.17.15#shuffle
*/