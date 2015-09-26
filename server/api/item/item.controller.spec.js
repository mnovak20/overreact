'use strict';

import { expect, should } from 'chai';
import request from 'supertest';

import app from '../../index';

describe('REST api/items', (done) => {
  should();

  it('should return array of items', (done) => {
    request(app)
      .get('/api/items')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.should.be.an('Array');

        done();
      });
  });
});