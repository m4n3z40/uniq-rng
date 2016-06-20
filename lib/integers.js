'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = integers;

var _nativeMathInteger = require('./base/engines/nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

var _uniqueGenerator = require('./base/uniqueGenerator');

var _uniqueGenerator2 = _interopRequireDefault(_uniqueGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function integers(size, start, end) {
    return (0, _uniqueGenerator2.default)(_nativeMathInteger2.default)(size, { start: start, end: end });
}