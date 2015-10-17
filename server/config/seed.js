'use strict';

import Item from '../api/item/item.model';

export default function seed() {
  const items = [{
    text: 'Make Eggs'
  }, {
    text: 'Buy Milk'
  }];

  return Item.remove()
    .then(() => {
      return Item.create(items);
    })
    .then(() => {
      console.log("Done seeding database");
    });
}