'use strict';

import { Router } from 'express';
import { index, show, create, update, destroy } from './item.controller';

const router = Router();

router.get('/', index);
router.get('/:id', show);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;
