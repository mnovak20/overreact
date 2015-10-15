'use strict';

import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { env } from '../config';
import httpProxy from 'http-proxy';
import routes from './routes';

const app = express();

if (env.nodeEnv === 'development') {
  app.use(morgan('dev'));

  /**
   * Webpack Related
   */
  const proxy = httpProxy.createProxyServer();

  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: `http://localhost:${env.webpackPort}`
    });
  });
}

if (env.nodeEnv === 'production') {
  app.use(morgan('combined'));
}

app.use(express.static(path.join(env.root, 'client')));

routes(app);

app.listen(env.port, () => {
  console.log(`Server is listening on port ${env.port}`);
});

export default app;