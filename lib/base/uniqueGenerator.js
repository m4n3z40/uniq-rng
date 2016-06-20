"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _set = require("babel-runtime/core-js/set");

var _set2 = _interopRequireDefault(_set);

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

exports.create = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var proto = (0, _defineProperty3.default)({}, _iterator2.default, _regenerator2.default.mark(function _callee() {
    var uniqRegistry, engine, nextValue, valueId;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    uniqRegistry = new _set2.default();
                    engine = this.engine;

                case 2:
                    if (!true) {
                        _context.next = 14;
                        break;
                    }

                    nextValue = engine.getNext(this);
                    valueId = engine.getIdentity(nextValue);

                    if (!uniqRegistry.has(valueId)) {
                        _context.next = 7;
                        break;
                    }

                    return _context.abrupt("continue", 2);

                case 7:

                    uniqRegistry.add(valueId);

                    _context.next = 10;
                    return nextValue;

                case 10:
                    if (!(this.size && this.size === uniqRegistry.size())) {
                        _context.next = 12;
                        break;
                    }

                    return _context.abrupt("return");

                case 12:
                    _context.next = 2;
                    break;

                case 14:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

function create(engine) {
    return function (size, options) {
        return (0, _assign2.default)((0, _create2.default)(proto), {
            engine: engine(options),
            size: size
        }, options);
    };
}