import test from 'tape';
import nativeMathInteger from '../../../src/base/engines/nativeMathInteger';

function generateRandomList(engine, size, options) {
    return new Array(size).map(() => engine.getNext(options));
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
    const rdmInt = integers.getNext();

    t.equal(
        rdmInt,
        parseInt(rdmInt, 10),
        'returns an integer number'
    );

    const rdmIntAbove499 = generateRandomList(integers, 200, { start: 500 });

    t.true(
        rdmIntAbove499.every(num => num > 499),
        'supports a \'start\' option so no value lower than \'start\' is generated'
    );

    const rdmIntBelow100 = generateRandomList(integers, 200, { end: 99 });

    t.true(
        rdmIntBelow100.every(num => num < 100),
        'supports a \'end\' option so no value higher than \'end\' is generated'
    );

    const rdmIntBetween99and199 = generateRandomList(
        integers,
        200,
        { start: 100, end: 199 }
    );

    t.true(
        rdmIntBetween99and199.every(num => num > 99 && num < 200),
        'support both \'start\' and \'end\' options for specifying a range'
    );
});

test('base/engines/nativeMathInteger instance\'s .getIdentity() method', t => {
    t.plan(1);

    const integers = nativeMathInteger();
    const rdmInt = integers.getNext();

    t.equal(
        integers.getIdentity(rdmInt),
        rdmInt,
        'returns a valid identifier'
    );
});
