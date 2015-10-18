'use strict';

import { expect, should } from 'chai';
import request from 'supertest';

import app from '../../index';
import Item from './item.model';

describe('REST api/items', done => {
  should();

  let _item;

  beforeEach(done => {
    Item.remove()
    .then(() => {
      return Item.create({ text: 'Make Eggs' })
        .then(item => _item = item);
    })
    .then(() => done());
  });

  it('should return array of items', done => {
    request(app)
      .get('/api/items')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.should.be.an.Array;
        res.body.length.should.equal(1);

        done();
      });
  });

  it('should return a detail of an item', done => {
    request(app)
      .get(`/api/items/${_item._id}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.text.should.equal('Make Eggs');
        res.body.completed.should.equal(false);

        done();
      });
  });

  it('should be able to create an item', done => {
    request(app)
      .post('/api/items/')
      .send({ text: 'Cook Noodle' })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.text.should.equal('Cook Noodle');
        res.body.completed.should.equal(false);

        done();
      });
  });

  it('should update an item', done => {
    request(app)
      .put(`/api/items/${_item._id}`)
      .send({ completed: true})
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.text.should.equal('Make Eggs');
        res.body.completed.should.equal(true);

        done();
      });
  });

  it('should update delete an item', done => {
    request(app)
      .delete(`/api/items/${_item._id}`)
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        res.body.text.should.equal('Make Eggs');
        res.body.completed.should.equal(false);

        done();
      });
  });
});