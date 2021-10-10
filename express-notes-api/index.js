const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();

app.use(express.json());
app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', function (req, res) {
  const gradesArr = [];
  for (const key in data.notes) {
    gradesArr.push(data.notes[key]);
  }
  res.json(gradesArr);
});

app.get('/api/grades/:id', function (req, res) {
  if (!Number.isInteger(Number(req.params.id)) || req.params.id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({
      error: 'cannot find note with id ' + req.params.id
    });
  } else {
    res.json(data.notes[req.params.id]);
  }
});

app.post('/api/grades', function (req, res) {
  if (!req.body.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else {
    const gradeObj = {
      content: req.body.content,
      id: data.nextId
    };
    data.notes[data.nextId] = gradeObj;
    data.nextId++;
    updateDataJson(201, gradeObj, res);
  }
});

app.delete('/api/grades/:id', function (req, res) {
  if (!Number.isInteger(Number(req.params.id)) || req.params.id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({
      error: 'cannot find note with id ' + req.params.id
    });
  } else {
    delete data.notes[req.params.id];
    updateDataJson(204, null, res);
  }
});

app.put('/api/grades/:id', function (req, res) {
  if (!Number.isInteger(Number(req.params.id)) || req.params.id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else if (!req.body.content) {
    res.status(400).json({
      error: 'content is a required field'
    });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({
      error: 'cannot find note with id ' + req.params.id
    });
  } else {
    const gradeObj = {
      content: req.body.content,
      id: Number(req.params.id)
    };
    data.notes[req.params.id] = gradeObj;
    updateDataJson(201, gradeObj, res);
  }
});

function updateDataJson(statusCode, gradeObj, res) {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    } else {
      res.status(statusCode).json(gradeObj);
    }
  });
}
