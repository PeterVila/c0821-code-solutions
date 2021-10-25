fetch('https://pokeapi.co/api/v2/pokemon/618')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error, 'that aint no pokemon'));
