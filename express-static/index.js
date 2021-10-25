const express = require('express');
const path = require('path');
const app = express();

const join = path.join(__dirname, '/public');
console.log(join);

const expressStatic = express.static(join);

app.use(expressStatic);
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});

app.get('/', function (req, res) {
  res.send('test');
});
