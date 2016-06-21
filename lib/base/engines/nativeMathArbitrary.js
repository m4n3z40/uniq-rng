"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

exports.default = createMathArbitrary;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var random = Math.random;


var protoMathArbitrary = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var start = _ref.start;
        var end = _ref.end;

        if (start && end) {
            return random() * (end - start) + start;
        }

        if (start) {
            return random() + start;
        }

        return random() * (end || 1);
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathArbitrary() {
    return (0, _create2.default)(protoMathArbitrary);
}