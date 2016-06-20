import test from 'tape';
import nativeMathInteger from '../../../src/base/engines/nativeMathInteger';

function generateRandomList(engine, size, options) {
    return new Array(size).map(() => engine.getNext(options));
}

test('nativeMathInteger engine module', t => {
    t.plan(1);

    t.ok(
        typeof nativeMathInteger === 'function',
        'should export a factory function'
    );
});

test('nativeMathInteger engine factory', t => {
    t.plan(2);

    const integers = nativeMathInteger();

    t.ok(
        typeof integers === 'object',
        'returns a new object'
    );

    t.ok(
        typeof integers.getNext === 'function' &&
        typeof integers.getIdentity === 'function',
        'object returned is an instance of \'Engine interface\''
    );
});

test('nativeMathInteger engine instance\'s \'getNext\' method', t => {
    t.plan(4);

    const integers = nativeMathInteger();
    const rdmInt = integers.getNext();

    t.ok(
        typeof rdmInt === 'number' &&
        rdmInt === parseInt(rdmInt, 10),
        'returns an integer number'
    );

    const rdmIntAbove499 = generateRandomList(integers, 200, { start: 500 });

    t.ok(
        rdmIntAbove499.every(num => num > 499),
        'supports a \'start\' option so that no value lower than \'start\' is generated'
    );

    const rdmIntBelow100 = generateRandomList(integers, 200, { end: 99 });

    t.ok(
        rdmIntBelow100.every(num => num < 100),
        'supports a \'end\' option so that no value higher than \'end\' is generated'
    );

    const rdmIntBetween99and199 = generateRandomList(integers, 200, { start: 100, end: 199 });

    t.ok(
        rdmIntBetween99and199.every(num => num > 99 && num < 200),
        'supports both \'start\' and \'end\' options for specifying a range'
    );
});

test('nativeMathInteger engine instance\'s \'getIdentity\' method', t => {
    t.plan(1);

    const integers = nativeMathInteger();
    const rdmInt = integers.getNext();

    t.ok(
        integers.getIdentity(rdmInt) === rdmInt,
        'returns a valid identifier'
    );
});
