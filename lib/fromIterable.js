'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fromIterable;

var _nativeMathPicker = require('./base/engines/nativeMathPicker');

var _nativeMathPicker2 = _interopRequireDefault(_nativeMathPicker);

var _uniqueGenerator = require('./base/uniqueGenerator');

var _uniqueGenerator2 = _interopRequireDefault(_uniqueGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fromIterable(source, size) {
    var sliceStart = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    var arrSource = Array.from(source);

    return (0, _uniqueGenerator2.default)(_nativeMathPicker2.default)(size || arrSource.length, { source: source, sliceStart: sliceStart });
}