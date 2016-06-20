import test from 'tape';
import * as uniqRNG from '../src';

test('uniqRNG module', t => {
    t.plan(7);

    t.true(
        typeof uniqRNG.integers === 'function',
        'exports the integer function'
    );

    t.true(
        typeof uniqRNG.reals === 'function',
        'exports the reals function'
    );

    t.true(
        typeof uniqRNG.strings === 'function',
        'exports the strings function'
    );

    t.true(
        typeof uniqRNG.hexes === 'function',
        'exports the hexes function'
    );

    t.true(
        typeof uniqRNG.dates === 'function',
        'exports the dates function'
    );

    t.true(
        typeof uniqRNG.fromIterable === 'function',
        'exports the fromIterable function'
    );

    t.true(
        typeof uniqRNG.strings.pools === 'object',
        'exports the strings pools object'
    );
});
