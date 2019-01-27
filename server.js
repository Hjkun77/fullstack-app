// Express JS is a framework - Fast, unopinionated, minimalist web framework for NodeJS
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + '/src'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
