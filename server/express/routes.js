'use strict';

import { env } from '../config';

export default function(app) {
  app.use('/api/items', require('../api/item'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(env.root, '/client/index.html'));
  });
}