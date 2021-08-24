var orderHistory = [
  {
    date: 'August 4, 2020',
    total: 34.00,
    recipient: 'JS Masher',
    'order #': 114 - 3941689 - 8772232,
    delivered: 'August 8, 2020',
    item: [{
      name: 'JavaScript for Impatient Programmers',
      author: 'Rauschmayer, Dr. Axel',
      return: 'Sep 7, 2020',
      'original price': 31.55
    }]
  },
  {
    date: 'July 19, 2020',
    total: 44.53,
    recipient: 'JS Masher',
    'order #': 113 - 9984268 - 1280257,
    delivered: 'July 20, 2020',
    item: [{
      name: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      return: 'Aug 19, 2020',
      'original price': 41.33
    }]
  },
  {
    date: 'July 7, 2020',
    total: 17.22,
    recipient: 'JS Masher',
    'order #': 114 - 2875557 - 9059409,
    delivered: 'July 7, 2020',
    item: [{
      name: 'Gamecube Controller Adapter',
      author: null,
      return: 'Aug 5, 2020',
      'original price': 15.98
    }]
  },
  {
    date: 'July 3, 2020',
    total: 138.93,
    recipient: 'JS Masher',
    'order #': 113 - 2883177 - 2648248,
    delivered: 'July 5, 2020',
    item:
    [
      {
        name: 'Gamecube Controller Adapter',
        author: null,
        return: 'Aug 5, 2020',
        'original price': 94.95
      },
      {
        name: 'The Art Of Sql',
        author: 'Faroult Stephane',
        return: 'Aug 4, 2020',
        'original price': 33.99
      }
    ]
  }
];

console.log('orderHistory: ', orderHistory);
console.log('orderHistory at position 0:', orderHistory[0]);
console.log('orderHistory at last position:', orderHistory[orderHistory.length - 1]);
console.log('List items of orderHistory[3]', orderHistory[3].item);
console.log('Seeing what item 2 of orderHistory[3]: ', orderHistory[3].item[1]);
