"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMathInteger;
var DEFAULT_INTEGER_START = 0;
var DEFAULT_INTEGER_END = Number.MAX_SAFE_INTEGER || 9007199254740991;

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
    return Object.create(protoMathInteger);
}