const express = require('express');
const app = express();
const port = 5000;

app.get('/myapi', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running `);
});
