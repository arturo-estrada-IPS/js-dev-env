import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './../webpack.config.dev';

const port = 35000;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
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
