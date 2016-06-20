"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _maxSafeInteger = require("babel-runtime/core-js/number/max-safe-integer");

var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

exports.default = createMathArbitrary;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_ARBITRARY_START = 0;
var DEFAULT_ARBITRARY_END = (_maxSafeInteger2.default || 9007199254740991) - 1;

var protoMathArbitrary = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$start = _ref.start;
        var start = _ref$start === undefined ? DEFAULT_ARBITRARY_START : _ref$start;
        var _ref$end = _ref.end;
        var end = _ref$end === undefined ? DEFAULT_ARBITRARY_END : _ref$end;

        return Math.random() * (end - start) + start;
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathArbitrary() {
    return (0, _create2.default)(protoMathArbitrary);
}