'use strict';

import Item from './item.model';

export function index(req, res, next) {
  Item
    .find(req.query).exec()
    .then(items => {
      res.status(200).send(items);
    })
    .catch(next);
}

export function show(req, res, next) {
  Item
    .findById(req.params.id).exec()
    .then(item => {
      res.status(200).send(item);
    })
    .catch(next);
}

export function create(req, res, next) {
  Item
    .create(req.body).exec()
    .then(item => {
      res.status(201).send(item);
    })
    .catch(next);
}

export function update(req, res, next) {
  Item
    .findByIdAndUpdate(req.params.id, req.body).exec()
    .then(item => {
      res.status(201).send(item);
    })
    .catch(next);
}

export function destroy(req, res, next) {
  Item
    .findByIdAndRemove(req.params.id).exec()
    .then(item => {
      res.status(201).send(item);
    })
    .catch(next);
}