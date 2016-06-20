'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dates;

var _nativeMathDate = require('./base/engines/nativeMathDate');

var _nativeMathDate2 = _interopRequireDefault(_nativeMathDate);

var _uniqueGenerator = require('./base/uniqueGenerator');

var _uniqueGenerator2 = _interopRequireDefault(_uniqueGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dates(size, start, end) {
    return (0, _uniqueGenerator2.default)(_nativeMathDate2.default)(size, { start: start, end: end });
}