'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createMathPicker;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMAINING_VALUES = Symbol();

var integers = (0, _nativeMathInteger2.default)();
var protoMathPicker = {
    getNext: function getNext() {
        var remainingValues = this[REMAINING_VALUES];
        var length = remainingValues.length;
        var index = 0;
        var value = void 0;

        if (length === 0) {
            throw new Error('No values left in the source iterable.');
        }

        if (length === 1) {
            value = remainingValues[index];
        } else {
            index = integers.getNext({
                start: 0,
                end: length - 1
            });

            value = remainingValues[index];
        }

        remainingValues.splice(index, 1);

        return value;
    },
    getIdentity: function getIdentity(value) {
        return value;
    }
};

function createMathPicker() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var source = _ref.source;
    var _ref$sliceStart = _ref.sliceStart;
    var sliceStart = _ref$sliceStart === undefined ? 0 : _ref$sliceStart;

    var pickerEngine = Object.create(protoMathPicker);

    pickerEngine[REMAINING_VALUES] = Array.from(source).slice(sliceStart);

    return pickerEngine;
}