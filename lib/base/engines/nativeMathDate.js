'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

exports.default = createMathDate;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TODAY = new Date().getTime();
var DEFAULT_DATE_GAP = 1000 * 60 * 60 * 24 * 365 * 50; // 50 Years
var DEFAULT_DATE_START = TODAY - DEFAULT_DATE_GAP / 2;

var integers = (0, _nativeMathInteger2.default)();
var protoMathDate = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$start = _ref.start;
        var start = _ref$start === undefined ? DEFAULT_DATE_START : _ref$start;
        var end = _ref.end;

        var startInMs = new Date(start).getTime();
        var nextIntOpts = {
            start: startInMs,
            end: end ? new Date(end).getTime() : startInMs + DEFAULT_DATE_GAP
        };

        return new Date(integers.getNext(nextIntOpts));
    },
    getIdentity: function getIdentity(value) {
        return value.getTime();
    }
};

function createMathDate() {
    return (0, _create2.default)(protoMathDate);
}