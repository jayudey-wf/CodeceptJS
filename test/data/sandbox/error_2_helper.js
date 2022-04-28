const assert = require('assert');

const Helper = require('../../../lib/helper');

class Error_2_helper extends Helper {
  _before() {
    console.log('Helper 2: I\'m simple Before hook');
  }

  _after() {
    console.log('Helper 2: I\'m simple After hook');
  }
}

module.exports = Error_2_helper;
