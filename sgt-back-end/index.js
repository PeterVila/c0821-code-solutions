const express = require('express');
const pg = require('pg');
const app = express();

app.use(express.json());
app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('Express server listening on port 3000');
});

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// Get 1 grade
app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  const params = [gradeId];
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Get all grades
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const gradeArr = [];
      for (const key in result.rows) {
        gradeArr.push(result.rows[key]);
      }
      res.json(gradeArr);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Add a new grade
app.post('/api/grades/', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  const sql = {
    text: 'INSERT INTO grades(name, course, score) VALUES($1, $2, $3) returning *',
    values: [req.body.name, req.body.course, req.body.score]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// Update a grade
app.put('/api/grades/:id', (req, res, next) => {
  const gradeId = Number(req.params.id);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'name, course, and score are required fields if you want to update'
    });
    return;
  } else if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = {
    text: 'UPDATE "grades" SET name = $1, course = $2, score = $3 WHERE "gradeId" = $4 returning *',
    values: [req.body.name, req.body.course, req.body.score, req.params.id]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ID of ${req.params.id}, please try again.`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
}
);

// Delete a grade
app.delete('/api/grades/:id', (req, res, next) => {
  const gradeId = Number(req.params.id);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = {
    text: 'DELETE from "grades" WHERE "gradeId" = $1 returning *',
    values: [req.params.id]
  };
  db.query(sql)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with ID of ${req.params.id}, please try again.`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    });
}
);
