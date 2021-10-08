const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', function (req, res) {
  const gradesArr = [];
  for (const key in grades) {
    gradesArr.push(grades[key]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', function (req, res) {
  const gradeObj = {
    course: req.body.course,
    name: req.body.name,
    score: req.body.score,
    id: nextId
  };
  grades[nextId] = gradeObj;
  res.status(201).json(gradeObj);
  nextId++;
});
