'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

exports.default = createMathPicker;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var integers = (0, _nativeMathInteger2.default)();
var protoMathPicker = {
    getNext: function getNext() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$source = _ref.source;
        var source = _ref$source === undefined ? [] : _ref$source;

        var srcArray = (0, _from2.default)(source);
        var length = source.length;

        if (length === 0) {
            return undefined;
        }

        if (length === 1) {
            return srcArray[0];
        }

        var index = integers.getNext({
            start: 0,
            end: length - 1
        });

        return srcArray[index];
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathPicker() {
    return (0, _create2.default)(protoMathPicker);
}