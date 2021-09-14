// console.log('Lodash is loaded:', typeof _ !== 'undefined');
cardGame(['Jim', 'Bob', 'Eric', 'Jim'], 3);
function cardGame(playerList, cardsPerHand) {
  var players = [];
  var deck = [];
  for (var l = 0; l < playerList.length; l++) {
    players.push({
      name: playerList[l],
      hand: [],
      score: 0
    });
  }
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'King', 'Queen', 'Jack'];
  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < ranks.length; x++) {
      deck.push({
        suits: suits[i],
        rank: ranks[x]
      });
    }
  }
  var shuffledDeck = _.shuffle(deck);
  for (var z = 0; z < players.length; z++) {
    for (var m = 0; m < cardsPerHand; m++) {
      players[z].hand.push(shuffledDeck.pop());
    }
    for (var p = 0; p < players[z].hand.length; p++) {
      if (players[z].hand[p].rank === 'Ace') {
        players[z].score += 11;
      } else if (players[z].hand[p].rank === 'King' || players[z].hand[p].rank === 'Queen' || players[z].hand[p].rank === 'Jack') {
        players[z].score += 10;
      } else {
        players[z].score += players[z].hand[p].rank;
      }
    }
  }
  // TIE BREAKER, Logging original players
  if (players.length === playerList.length) {
    console.log('Starting Players:', players);
  }
  var tieBreaker = [];
  for (var g = 0; g < players.length; g++) {
    tieBreaker.push(players[g].score);
  }
  var highestValue = Math.max(...tieBreaker);
  for (var e = 0; e < players.length; e++) {

    if (players[e].score !== highestValue) {
      players.splice(e, 1);
      e--; // Without this, it doesn't target the last e
    }
  }
  console.log('Highest score player(s): ', players);
  if (players.length > 1) {
    console.log('Tiebreaker between ' + players.length + ' players!');
  }
  if (players.length === 1) {
    console.log('%c' + players[0].name + ' is the winner!', 'color:gold');
  } else {
    // Bring players names into a new array
    var playersTied = [];
    for (var c = 0; c < players.length; c++) {
      playersTied.push(players[g].name);
    }
    cardGame(playersTied, cardsPerHand);
  }
}
