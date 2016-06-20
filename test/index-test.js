import test from 'tape';
import * as uniqRNG from '../src';

test('uniqRNG module', t => {
    t.plan(7);

    t.ok(
        typeof uniqRNG.integers === 'function',
        'exports the integer function'
    );

    t.ok(
        typeof uniqRNG.reals === 'function',
        'exports the reals function'
    );

    t.ok(
        typeof uniqRNG.strings === 'function',
        'exports the strings function'
    );

    t.ok(
        typeof uniqRNG.hexes === 'function',
        'exports the hexes function'
    );

    t.ok(
        typeof uniqRNG.dates === 'function',
        'exports the dates function'
    );

    t.ok(
        typeof uniqRNG.fromIterable === 'function',
        'exports the fromIterable function'
    );

    t.ok(
        typeof uniqRNG.strings.pools === 'object',
        'exports the strings pools object'
    );
});
