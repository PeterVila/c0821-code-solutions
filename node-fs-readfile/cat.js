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

const [, , ...args] = process.argv;

for (var i = 0; i < args.length; i++) {
  specificFile(args[i]);
}
