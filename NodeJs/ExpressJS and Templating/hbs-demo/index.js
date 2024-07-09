const app = require('express')();



app.get('/', (req, res) => {
  res.send("It works");
});

app.listen(3000);