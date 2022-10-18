const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist' ));

app.use('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/dist'});
})

app.listen(port, () => console.log(`App listening to port ${port}`));
