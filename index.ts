import express = require('express');
import factorial = require('./utils/calculateFactorial');

const app = express();

app.get('/', (req, res) => {
  const { num } = req.query;
  if (!num) return res.status(400).send({ status: 'query num is required so bad'});
  const fact = factorial(parseInt(num, 10));
  res.send({ status: 'hi', value: fact });
});

app.listen(3000, () => console.log('server running at port 3000'));
