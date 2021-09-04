console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [
  { name: 'player1', hand: [] },
  { name: 'player2', hand: [] },
  { name: 'player3', hand: [] },
  { name: 'player4', hand: [] }
];
var deck = [];
function createDeck(suit) {
  deck.push({ rank: 'Ace', suit: suit });
  for (var i = 2; i <= 10; i++) {
    deck.push({ rank: i, suit: suit });
  }
  deck.push({ rank: 'Jack', suit: suit });
  deck.push({ rank: 'Queen', suit: suit });
  deck.push({ rank: 'King', suit: suit });
}
createDeck('clubs');
createDeck('diamonds');
createDeck('hearts');
createDeck('spades');

console.log('deck:', deck);

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
  } else if (scoresInOrder[m] === 2) {
    scoresValue.push(2);
  } else if (scoresInOrder[m] === 3) {
    scoresValue.push(3);
  } else if (scoresInOrder[m] === 4) {
    scoresValue.push(4);
  } else if (scoresInOrder[m] === 5) {
    scoresValue.push(5);
  } else if (scoresInOrder[m] === 6) {
    scoresValue.push(6);
  } else if (scoresInOrder[m] === 7) {
    scoresValue.push(7);
  } else if (scoresInOrder[m] === 8) {
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
  console.log('%cPlayer1 Wins!', 'color: cyan; font-size: 15px');
} else if (final2 > final1 && final2 > final3 && final2 > final4) {
  console.log('%cPlayer2 Wins!', 'color: cyan; font-size: 15px');
} else if (final3 > final1 && final3 > final2 && final3 > final4) {
  console.log('%cPlayer3 Wins!', 'color: cyan; font-size: 15px');
} else if (final4 > final1 && final4 > final2 && final4 > final3) {
  console.log('%cPlayer4 Wins!', 'color: cyan; font-size: 15px');
} else if (final1 === final2 && final1 === final3 && final1 === final4) {
  console.log('%cEveryone Tied!', 'color: cyan; font-size: 15px');
} else if ((final1 && final2) > (final3 && final4)) {
  console.log('Player1 and Player2 Tied!');
  tieBreaker('Player 1', 'Player2');
} else if ((final1 && final3) > (final2 && final4)) {
  console.log('Player1 and Player3 Tied!');
  tieBreaker('Player 1', 'Player3');
} else if ((final1 && final4) > (final2 && final3)) {
  console.log('Player1 and Player4 Tied!');
  tieBreaker('Player 1', 'Player4');
} else if ((final2 && final3) > (final1 && final4)) {
  console.log('Player2 and Player3 Tied!');
  tieBreaker('Player 2', 'Player3');
} else if ((final2 && final4) > (final1 && final3)) {
  console.log('Player2 and Player4 Tied');
  tieBreaker('Player 2', 'Player4');
} else if ((final3 && final4) > (final1 && final2)) {
  console.log('Player3 and Player4 Tied!');
  tieBreaker('Player 3', 'Player4');
}
function tieBreaker(person1, person2) {
  console.log(person1 + ' and ' + person2 + ' pull another card!');
  var tie1 = _.random(2, 11);
  var tie2 = _.random(2, 11);
  if (tie1 > tie2) {
    console.log(person1 + ' wins! Their card is worth ' + tie1 + ' points');
    console.log(person2 + ' pulled a card worth ' + tie2 + ' points.');
  } else {
    console.log(person2 + ' wins! Their card is worth ' + tie2 + ' points');
    console.log(person1 + ' pulled a card worth ' + tie1 + ' points.');

  }
}
