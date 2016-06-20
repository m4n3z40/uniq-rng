'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMathDate;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TODAY = new Date().getTime();
var DEFAULT_DATE_GAP = 1000 * 60 * 60 * 24 * 365 * 50; // 50 Years
var DEFAULT_DATE_START = TODAY - DEFAULT_DATE_GAP / 2;
var DEFAULT_DATE_END = TODAY + DEFAULT_DATE_GAP / 2;

var integers = (0, _nativeMathInteger2.default)();
var protoMathDate = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$start = _ref.start;
        var start = _ref$start === undefined ? DEFAULT_DATE_START : _ref$start;
        var _ref$end = _ref.end;
        var end = _ref$end === undefined ? DEFAULT_DATE_END : _ref$end;

        var nextIntOpts = {
            start: new Date(start).getTime(),
            end: new Date(end).getTime()
        };

        return new Date(integers.getNext(nextIntOpts));
    },
    getIdentity: function getIdentity(value) {
        return value.getTime();
    }
};

function createMathDate() {
    return Object.create(protoMathDate);
}