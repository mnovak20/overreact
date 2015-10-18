'use strict';

import { root } from '../config/environment';
import path from 'path';

export default function(app) {
  app.use('/api/items', require('../api/item'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(root, '/client/index.html'));
  });
}