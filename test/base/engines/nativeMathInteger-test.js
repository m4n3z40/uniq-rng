import test from 'tape';
import nativeMathInteger from '../../../src/base/engines/nativeMathInteger';

function randomArray(engine, size, options) {
    return Array.from(new Array(size)).map(() => engine.getNext(options));
}

function isInteger(number) {
    return (
        typeof number === 'number' &&
        number === parseInt(number, 10)
    );
}

test('base/engines/nativeMathInteger', t => {
    t.plan(1);

    t.equal(
        typeof nativeMathInteger,
        'function',
        'should export a factory function'
    );
});

test('base/engines/nativeMathInteger factory', t => {
    t.plan(3);

    const integers = nativeMathInteger();

    t.equal(
        typeof integers,
        'object',
        'returns a new object'
    );

    t.equal(
        typeof integers.getNext,
        'function',
        'object returned has a .getNext() method'
    );

    t.equal(
        typeof integers.getIdentity,
        'function',
        'object returned has a .getIdentity() method'
    );
});

test('base/engines/nativeMathInteger instance\'s .getNext() method', t => {
    t.plan(4);

    const integers = nativeMathInteger();

    t.true(isInteger(integers.getNext()), 'returns an integer');

    const intAbove499 = randomArray(integers, 200, { start: 500 });

    t.true(
        intAbove499.every(num => isInteger(num) && num > 499),
        'supports a \'start\' option so no value lower than \'start\' is generated'
    );

    const intBelow100 = randomArray(integers, 200, { end: 99 });

    t.true(
        intBelow100.every(num => isInteger(num) && num < 100),
        'supports a \'end\' option so no value higher than \'end\' is generated'
    );

    const intRange99to199 = randomArray(integers, 200, { start: 100, end: 199 });

    t.true(
        intRange99to199.every(num => isInteger(num) && num > 99 && num < 200),
        'support both \'start\' and \'end\' options for specifying a range'
    );
});

test('base/engines/nativeMathInteger instance\'s .getIdentity() method', t => {
    t.plan(1);

    const integers = nativeMathInteger();
    const int = integers.getNext();

    t.equal(
        integers.getIdentity(int),
        int,
        'returns a valid identifier'
    );
});
