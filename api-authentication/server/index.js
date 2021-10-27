require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const {
    username,
    password
  } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  /* your code starts here */
  const sql = `
    select *
    from "users"
    where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      console.log(user);
      argon2
        .verify(user.hashedPassword, password)
        .then(isMatching => {
          console.log('Does your password match?', isMatching);
          const payload = {
            userId: user.userId,
            username: user.username
          };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.status(201).json({
            token: token,
            user: payload
          });
        })
        .catch(err => {
          console.error(err);
        });

    })
    .catch(err => {
      console.error(err);
      res.status(401).json({
        error: 'Invalid login Error'
      });
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
