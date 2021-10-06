const fs = require('fs');

function specificFile(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

specificFile(process.argv[2]);
