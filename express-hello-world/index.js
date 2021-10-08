const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.send('wow, its an avocadooo');
  // next();
});

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});
