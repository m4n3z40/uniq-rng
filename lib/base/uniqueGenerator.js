'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _iterator = require('babel-runtime/core-js/symbol/iterator');

var _iterator2 = _interopRequireDefault(_iterator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

exports.default = create;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function removeDuplicates(iterable) {
    return (0, _from2.default)(new _set2.default(iterable));
}

function getSourceIterable(_ref) {
    var source = _ref.source;

    return source ? removeDuplicates(source) : undefined;
}

function getTotalResultsPossible(size, source) {
    return source && (!size || size > source.length) ? source.length : size;
}

function removeValue(source, value) {
    if (!source || source.length === 0) return;

    source.splice(source.indexOf(value), 1);
}

function throwIfInvalidEngine(engine) {
    if ((typeof engine === 'undefined' ? 'undefined' : (0, _typeof3.default)(engine)) !== 'object' || typeof engine.getNext !== 'function' || typeof engine.getIdentity !== 'function') {
        throw new Error('No valid engine was provided. ' + 'An engine must be an object with the methods: ' + '.getNext() and .getIdentity().');
    }
}

var proto = (0, _defineProperty3.default)({
    getIterator: function getIterator() {
        return (0, _getIterator3.default)(this);
    },
    toArray: function toArray() {
        return (0, _from2.default)(this);
    }
}, _iterator2.default, _regenerator2.default.mark(function _callee() {
    var options, size, engine, source, totalResults, nextOptions, uniqRegistry, nextValue, valueId;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    options = this.options;
                    size = this.size;
                    engine = this.engine;
                    source = getSourceIterable(options);
                    totalResults = getTotalResultsPossible(size, source);
                    nextOptions = (0, _assign2.default)({}, options, { source: source });
                    uniqRegistry = new _set2.default();

                case 7:
                    nextValue = engine.getNext(nextOptions);
                    valueId = engine.getIdentity(nextValue);

                    if (!uniqRegistry.has(valueId)) {
                        _context.next = 11;
                        break;
                    }

                    return _context.abrupt('continue', 17);

                case 11:

                    uniqRegistry.add(valueId);
                    removeValue(source, nextValue);

                    _context.next = 15;
                    return nextValue;

                case 15:
                    if (!(totalResults === uniqRegistry.size)) {
                        _context.next = 17;
                        break;
                    }

                    return _context.abrupt('return');

                case 17:
                    _context.next = 7;
                    break;

                case 19:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

function create(engine) {
    if (typeof engine !== 'function') {
        throw new Error('No valid engine factory provided.');
    }

    return function (size, options) {
        var engineInstance = engine(options);

        throwIfInvalidEngine(engineInstance);

        return (0, _assign2.default)((0, _create2.default)(proto), {
            engine: engineInstance,
            size: size,
            options: options
        });
    };
}