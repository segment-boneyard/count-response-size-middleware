
var defaults = require('defaults');
var inherits = require('util').inherits;


/**
 * Expose `generate`.
 */

module.exports = generate;


/**
 * Generate a count response size middleware.
 *
 * @param {Object} options
 *   @param {String} key
 * @return {Function}
 */

function generate (options) {

  options = defaults(options, { key: '_sent'});
  var key = options.key;

  return function countResponseSize (req, res, next) {
    if (res[key]) return next();

    var dispatched = req.client._bytesDispatched;

    function finish () {
      res.removeListener('finish', finish);
      res.removeListener('close', finish);
      res[key] = req.client._bytesDispatched - dispatched;
    }

    res.on('finish', finish);
    res.on('close', finish);

    next();
  };
}