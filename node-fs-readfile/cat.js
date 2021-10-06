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

for (var i = 2; i < process.argv.length; i++) {
  specificFile(process.argv[i]);
}
