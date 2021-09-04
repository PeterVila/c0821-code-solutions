console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  {
    name: 'player1',
    hand: []
  },
  {
    name: 'player2',
    hand: []
  },
  {
    name: 'player3',
    hand: []
  },
  {
    name: 'player4',
    hand: []
  }
];
var deck = [
  { rank: 'Ace', suit: 'clubs' },
  { rank: '2', suit: 'clubs' },
  { rank: '3', suit: 'clubs' },
  { rank: '4', suit: 'clubs' },
  { rank: '5', suit: 'clubs' },
  { rank: '6', suit: 'clubs' },
  { rank: '7', suit: 'clubs' },
  { rank: '8', suit: 'clubs' },
  { rank: '9', suit: 'clubs' },
  { rank: '10', suit: 'clubs' },
  { rank: 'Jack', suit: 'clubs' },
  { rank: 'Queen', suit: 'clubs' },
  { rank: 'King', suit: 'clubs' },
  { rank: 'Ace', suit: 'diamonds' },
  { rank: '2', suit: 'diamonds' },
  { rank: '3', suit: 'diamonds' },
  { rank: '4', suit: 'diamonds' },
  { rank: '5', suit: 'diamonds' },
  { rank: '6', suit: 'diamonds' },
  { rank: '7', suit: 'diamonds' },
  { rank: '8', suit: 'diamonds' },
  { rank: '9', suit: 'diamonds' },
  { rank: '10', suit: 'diamonds' },
  { rank: 'Jack', suit: 'diamonds' },
  { rank: 'Queen', suit: 'diamonds' },
  { rank: 'King', suit: 'diamonds' },
  { rank: 'Ace', suit: 'hearts' },
  { rank: '2', suit: 'hearts' },
  { rank: '3', suit: 'hearts' },
  { rank: '4', suit: 'hearts' },
  { rank: '5', suit: 'hearts' },
  { rank: '6', suit: 'hearts' },
  { rank: '7', suit: 'hearts' },
  { rank: '8', suit: 'hearts' },
  { rank: '9', suit: 'hearts' },
  { rank: '10', suit: 'hearts' },
  { rank: 'Jack', suit: 'hearts' },
  { rank: 'Queen', suit: 'hearts' },
  { rank: 'King', suit: 'hearts' },
  { rank: 'Ace', suit: 'spades' },
  { rank: '2', suit: 'spades' },
  { rank: '3', suit: 'spades' },
  { rank: '4', suit: 'spades' },
  { rank: '5', suit: 'spades' },
  { rank: '6', suit: 'spades' },
  { rank: '7', suit: 'spades' },
  { rank: '8', suit: 'spades' },
  { rank: '9', suit: 'spades' },
  { rank: '10', suit: 'spades' },
  { rank: 'Jack', suit: 'spades' },
  { rank: 'Queen', suit: 'spades' },
  { rank: 'King', suit: 'spades' }
];
var shuffledDeck = _.shuffle(deck);
for (var i = 0; i < players.length; i++) {
  for (var x = 0; x < 1; x++) {
    players[i].hand.push(shuffledDeck[x]);
    shuffledDeck.splice(x, 1);
    players[i].hand.push(shuffledDeck[x]);
    shuffledDeck.splice(x, 1);
  }
}
console.log('shuffledDeck after giving cards out:', shuffledDeck.length);
console.log('players:', players);
var scoresInOrder = [];
for (var z = 0; z < players.length; z++) {
  for (var key in players[z].hand) {
    scoresInOrder.push(players[z].hand[key].rank);
  }
}
var scoresValue = [];
for (var m = 0; m < scoresInOrder.length; m++) {
  if (scoresInOrder[m] === 'Ace') {
    scoresValue.push(11);
  } else if (scoresInOrder[m] === 'Jack' || scoresInOrder[m] === 'Queen' || scoresInOrder[m] === 'King') {
    scoresValue.push(10);
  } else if (scoresInOrder[m] === '2') {
    scoresValue.push(2);
  } else if (scoresInOrder[m] === '3') {
    scoresValue.push(3);
  } else if (scoresInOrder[m] === '4') {
    scoresValue.push(4);
  } else if (scoresInOrder[m] === '5') {
    scoresValue.push(5);
  } else if (scoresInOrder[m] === '6') {
    scoresValue.push(6);
  } else if (scoresInOrder[m] === '7') {
    scoresValue.push(7);
  } else if (scoresInOrder[m] === '8') {
    scoresValue.push(8);
  } else {
    scoresValue.push(9);
  }
}
var playerByIndex = [];
for (var j = 0; j < scoresValue.length; j++) {
  playerByIndex.push(scoresValue[j] + scoresValue[j++]);
}
console.log('Players 1-4:', playerByIndex);
var final1 = playerByIndex[0];
var final2 = playerByIndex[1];
var final3 = playerByIndex[2];
var final4 = playerByIndex[3];
if (final1 > final2 && final1 > final3 && final1 > final4) {
  console.log('%cPlayer1 Wins!', 'color: cyan; font-size: 15px; border: 1px solid green');
} else if (final2 > final1 && final2 > final3 && final2 > final4) {
  console.log('%cPlayer2 Wins!', 'color: cyan; font-size: 15px; border: 1px solid green');
} else if (final3 > final1 && final3 > final2 && final3 > final4) {
  console.log('%cPlayer3 Wins!', 'color: cyan; font-size: 15px; border: 1px solid green');
} else if (final4 > final1 && final4 > final2 && final4 > final3) {
  console.log('%cPlayer4 Wins!', 'color: cyan; font-size: 15px; border: 1px solid green');
} else {
  if (final1 > final4) {
    if (final1 === final2) {
      if (final1 === final3) {
        if (final1 === final4) {
          console.log('%cALL TIED', 'color: cyan; font-size: 15px; border: 1px solid green');
        } else {
          console.log('%cPlayers 1,2,3 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
        }
      } else {
        console.log('%cPlayers 1 and 2 are tied', 'color: cyan; font-size: 15px; border: 1px solid green');
      }
    }
  }
  if (final1 === final4) {
    if (final1 === final3) {
      console.log('%cPlayers 1,3,4 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
    }
    if (final1 === final2) {
      console.log('%cPlayers 1,2,4 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
    }
    console.log('%c1 and 4 are tied!');
  } else if (final1 === final3) {
    console.log('%cPlayers 1 and 3 are tied', 'color: cyan; font-size: 15px; border: 1px solid green');
  } else if (final2 === final4) {
    if (final2 === final3) {
      console.log('%cPlayers 2,3,4 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
    } else {
      console.log('%cPlayers 2 and 4 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
    }
  }
  if (final2 === final3) {
    console.log('%cPlayers 2 and 3 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
  }
  if (final3 === final4) {
    console.log('%cPlayers 3 and 4 are tied!', 'color: cyan; font-size: 15px; border: 1px solid green');
  }
}
/*
1. Create an array of 4 objects
    -Unique names and hands for each
2. Create a collection of 52 objects representing card-deck
    -Each should have a rank (Ace,2,...) and suit (clubs, spades)
3.Shuffled Deck
4. Deal 2 cards to each player
    -Go through each player
        At each player, go through the
https://lodash.com/docs/4.17.15#shuffle
5. Add up score of cards
    -Aces are 11
    -Jack, Queen, King are 10 points
*/
