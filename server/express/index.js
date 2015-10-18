'use strict';

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import { nodeEnv, root, port, webpackPort } from '../config/environment';
import httpProxy from 'http-proxy';
import routes from './routes';

const app = express();

if (nodeEnv === 'development') {
  app.use(morgan('dev'));

  /**
   * Webpack Related
   */
  const proxy = httpProxy.createProxyServer();

  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: `http://localhost:${webpackPort}`
    });
  });
}

if (nodeEnv === 'production') {
  app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(express.static(path.join(root, 'client')));

routes(app);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;