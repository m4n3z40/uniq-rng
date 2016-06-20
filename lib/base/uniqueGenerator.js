"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var proto = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
    var uniqRegistry, engine, nextValue, valueId;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    uniqRegistry = new Set();
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
        return Object.assign(Object.create(proto), {
            engine: engine(options),
            size: size
        }, options);
    };
}