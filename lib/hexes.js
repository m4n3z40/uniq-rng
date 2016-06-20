'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hexes;

var _strings = require('./strings');

var _strings2 = _interopRequireDefault(_strings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hexes(size, length) {
    return (0, _strings2.default)(size, length, _strings.pools.HEXA_DECIMAL);
}