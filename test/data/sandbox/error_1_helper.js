const assert = require('assert');

const Helper = require('../../../lib/helper');

class Error_1_helper extends Helper {
  _before() {
    throw new Error('Some random exception')

    return new Promise((resolve, reject) => {
      console.log('Initial');

      resolve();
    })
      .then(() => {
        throw new Error('Something failed');

        console.log('Do this');
      })
      .catch(() => {
        console.error('Do that');
      })
      .then(() => {
        console.log('Some random exception');
      });
    // console.log('Helper 1: I\'m simple Before hook');
  }

  _after() {
    console.log('Helper 1: I\'m simple After hook');
  }
}

module.exports = Error_1_helper;
