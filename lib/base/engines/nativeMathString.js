'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

exports.default = createMathString;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STR_LENGTH = 8;

var integers = (0, _nativeMathInteger2.default)();
var protoMathString = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$length = _ref.length;
        var length = _ref$length === undefined ? DEFAULT_STR_LENGTH : _ref$length;
        var _ref$pool = _ref.pool;
        var pool = _ref$pool === undefined ? '0123456789' : _ref$pool;

        var nextIntOpts = { start: 0, end: pool.length - 1 };
        var str = '';

        while (str.length <= length) {
            str += pool.charAt(integers.getNext(nextIntOpts));
        }

        return str;
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathString() {
    return (0, _create2.default)(protoMathString);
}