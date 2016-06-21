'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reals;

var _nativeMathArbitrary = require('./base/engines/nativeMathArbitrary');

var _nativeMathArbitrary2 = _interopRequireDefault(_nativeMathArbitrary);

var _uniqueGenerator = require('./base/uniqueGenerator');

var _uniqueGenerator2 = _interopRequireDefault(_uniqueGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reals(size, start, end) {
    return (0, _uniqueGenerator2.default)(_nativeMathArbitrary2.default)(size, { start: start, end: end });
}