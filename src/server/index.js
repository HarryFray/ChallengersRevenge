const expressGraphQL = require('express-graphql');
const express = require('express');
const schema = require('./schema');
const db = require('../db/index.js');
const cors = require('cors');

const app = express();

app.use(cors())

// api
const apiRouter = express.Router();
app.use('/api', apiRouter);

// api/rest
const restRouter = express.Router();
apiRouter.use('/rest', restRouter);

restRouter.get('/books', (req, res) => {
  res.send('Hello World! -from rest')
})

restRouter.get('/goodbooks', (req, res) => {
  res.send('second call!')
})

// api/graphql
apiRouter.use('/graphql', expressGraphQL({
  schema,
  graphiql: false,
}));

app.listen(8080, () => {
  console.log('API local 8080');
});
