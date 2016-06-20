'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

exports.default = createMathPicker;

var _nativeMathInteger = require('./nativeMathInteger');

var _nativeMathInteger2 = _interopRequireDefault(_nativeMathInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMAINING_VALUES = (0, _symbol2.default)();

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

    var pickerEngine = (0, _create2.default)(protoMathPicker);

    pickerEngine[REMAINING_VALUES] = (0, _from2.default)(source).slice(sliceStart);

    return pickerEngine;
}