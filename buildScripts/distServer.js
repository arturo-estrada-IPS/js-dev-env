import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 5000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@domain.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@domain.com' },
    { id: 3, firstName: 'Jack', lastName: 'Doe', email: 'jack.doe@domain.com' }
  ]);
});

app.listen(port, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } else {
    open('http://localhost:' + port);
  }
});
