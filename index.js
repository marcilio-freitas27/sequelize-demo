const express = require('express');
const router = require('./routes');
const app = express();
app.use(router);

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  })
);

app.listen({
    port:4000
});
console.log('listening on http://localhost:4000');

