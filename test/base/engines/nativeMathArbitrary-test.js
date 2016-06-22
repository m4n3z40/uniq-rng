import test from 'tape';
import nativeMathArbitrary from '../../../src/base/engines/nativeMathArbitrary';
import { isDecimal, randomArray } from '../../support/helpers';

test('[base/engines/nativeMathArbitrary] module', t => {
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

    const decAbove499 = randomArray(decimals, 200, { start: 500 });

    t.true(
        decAbove499.every(num => isDecimal(num) && num > 499) &&
        decAbove499.some(num => Math.floor(num) !== 500),
        'supports a \'start\' option so no value lower than \'start\' is generated'
    );

    const decBelow100 = randomArray(decimals, 200, { end: 99 });

    t.true(
        decBelow100.every(num => isDecimal(num) && num < 100),
        'supports a \'end\' option so no value higher than \'end\' is generated'
    );

    const decRange99to199 = randomArray(decimals, 200, { start: 100, end: 199 });

    t.true(
        decRange99to199.every(num => isDecimal(num) && num > 99 && num < 200),
        'support both \'start\' and \'end\' options for specifying a range'
    );
});

test('[base/engines/nativeMathArbitrary] instance\'s .getIdentity() method', t => {
    t.plan(1);

    const decimals = nativeMathArbitrary();
    const dec = decimals.getNext();

    t.equal(
        decimals.getIdentity(dec),
        dec,
        'returns a valid identifier'
    );
});
