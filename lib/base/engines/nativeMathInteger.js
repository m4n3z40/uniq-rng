"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _maxSafeInteger = require("babel-runtime/core-js/number/max-safe-integer");

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

exports.default = createMathInteger;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTEGER_START = 0;
var DEFAULT_INTEGER_END = _maxSafeInteger2.default || 9007199254740991;

var protoMathInteger = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$start = _ref.start;
        var start = _ref$start === undefined ? DEFAULT_INTEGER_START : _ref$start;
        var _ref$end = _ref.end;
        var end = _ref$end === undefined ? DEFAULT_INTEGER_END : _ref$end;

        return Math.floor(Math.random() * (end - start + 1) + start);
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathInteger() {
    return (0, _create2.default)(protoMathInteger);
}