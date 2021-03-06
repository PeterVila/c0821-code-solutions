const fs = require('fs');
const data = require('./data.json');
const feature = process.argv[2];
const newNote = process.argv[3];

if (feature === 'read') {
  for (const noteID in data.notes) {
    console.log(noteID + ': ' + data.notes[noteID]);
  }
}

if (feature === 'create') {
  data.notes[data.nextId++] = newNote;
  updateDataJson();
}

if (feature === 'delete') {
  if (newNote) {
    delete data.notes[newNote];
    updateDataJson();
  }
}

if (feature === 'update') {
  if (newNote) {
    data.notes[newNote] = process.argv[4];
    updateDataJson();
  }
}

function updateDataJson() {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
