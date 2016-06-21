import test from 'tape';
import nativeMathArbitrary from '../../../src/base/engines/nativeMathArbitrary';
import { isDecimal, randomArray } from '../../support/helpers';

test('[base/engines/nativeMathArbitrary]', t => {
    t.plan(1);

    t.equal(
        typeof nativeMathArbitrary,
        'function',
        'should export a factory function'
    );
});

test('[base/engines/nativeMathArbitrary] factory', t => {
    t.plan(3);

    const decimals = nativeMathArbitrary();

    t.equal(
        typeof decimals,
        'object',
        'returns a new object'
    );

    t.equal(
        typeof decimals.getNext,
        'function',
        'object returned has a .getNext() method'
    );

    t.equal(
        typeof decimals.getIdentity,
        'function',
        'object returned has a .getIdentity() method'
    );
});

test('[base/engines/nativeMathArbitrary] instance\'s .getNext() method', t => {
    t.plan(4);

    const decimals = nativeMathArbitrary();

    t.true(isDecimal(decimals.getNext()), 'returns a decimal number');

    const intAbove499 = randomArray(decimals, 200, { start: 500 });

    t.true(
        intAbove499.every(num => isDecimal(num) && num > 499),
        'supports a \'start\' option so no value lower than \'start\' is generated'
    );

    const intBelow100 = randomArray(decimals, 200, { end: 99 });

    t.true(
        intBelow100.every(num => isDecimal(num) && num < 100),
        'supports a \'end\' option so no value higher than \'end\' is generated'
    );

    const intRange99to199 = randomArray(decimals, 200, { start: 100, end: 199 });

    t.true(
        intRange99to199.every(num => isDecimal(num) && num > 99 && num < 200),
        'support both \'start\' and \'end\' options for specifying a range'
    );
});

test('[base/engines/nativeMathArbitrary] instance\'s .getIdentity() method', t => {
    t.plan(1);

    const decimals = nativeMathArbitrary();
    const int = decimals.getNext();

    t.equal(
        decimals.getIdentity(int),
        int,
        'returns a valid identifier'
    );
});
