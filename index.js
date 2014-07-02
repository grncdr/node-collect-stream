'use strict';
'use strict';

var Promise = require('bluebird');
var concatStream = require('concat-stream');

module.exports = function collectStream (stream) {
  return new Promise(function (resolve, reject) {
    stream.on('error', reject).pipe(concatStream(resolve));
  });
};
