'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pools = undefined;
exports.default = strings;

var _nativeMathString = require('./base/engines/nativeMathString');

var _nativeMathString2 = _interopRequireDefault(_nativeMathString);

var _uniqueGenerator = require('./base/uniqueGenerator');

var _uniqueGenerator2 = _interopRequireDefault(_uniqueGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
var ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var NUMERIC = '0123456789';
var ALPHA_NUM = ALPHA_LOWER + NUMERIC;
var ALL_ALPHA_NUM = ALPHA_LOWER + ALPHA_UPPER + NUMERIC;
var HEXA_DECIMAL = ALPHA_NUM + ALPHA_LOWER.slice(0, 6);

var pools = exports.pools = {
    ALPHA_LOWER: ALPHA_LOWER,
    ALPHA_UPPER: ALPHA_UPPER,
    NUMERIC: NUMERIC,
    ALPHA_NUM: ALPHA_NUM,
    ALL_ALPHA_NUM: ALL_ALPHA_NUM,
    HEXA_DECIMAL: HEXA_DECIMAL
};

function strings(size, length) {
    var pool = arguments.length <= 2 || arguments[2] === undefined ? ALL_ALPHA_NUM : arguments[2];

    return (0, _uniqueGenerator2.default)(_nativeMathString2.default)(size, { length: length, pool: pool });
}

strings.pools = pools;