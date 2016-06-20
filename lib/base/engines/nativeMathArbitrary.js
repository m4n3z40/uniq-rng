"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMathArbitrary;
var DEFAULT_ARBITRARY_START = 0;
var DEFAULT_ARBITRARY_END = (Number.MAX_SAFE_INTEGER || 9007199254740991) - 1;

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
    return Object.create(protoMathArbitrary);
}