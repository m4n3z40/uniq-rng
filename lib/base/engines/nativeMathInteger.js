"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

exports.default = createMathInteger;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var floor = Math.floor;
var random = Math.random;


var protoMathInteger = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var start = _ref.start;
        var end = _ref.end;

        if (start && end) {
            return floor(random() * (end - start + 1) + start);
        }

        if (start) {
            return floor(random() + start);
        }

        return floor(random() * (end ? end + 1 : 10));
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathInteger() {
    return (0, _create2.default)(protoMathInteger);
}