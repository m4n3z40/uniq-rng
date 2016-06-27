import test from 'tape';
import * as uniqRNG from '../src';

test('[index]', t => {
    t.plan(7);

    t.equal(
        typeof uniqRNG.integers,
        'function',
        'exports the .integers() function'
    );

    t.equal(
        typeof uniqRNG.decimals,
        'function',
        'exports the .decimals() function'
    );

    t.equal(
        typeof uniqRNG.strings,
        'function',
        'exports the .strings() function'
    );

    t.equal(
        typeof uniqRNG.strings.pools,
        'object',
        'exports the .strings.pools object'
    );

    t.equal(
        typeof uniqRNG.hexes,
        'function',
        'exports the .hexes() function'
    );

    t.equal(
        typeof uniqRNG.dates,
        'function',
        'exports the .dates() function'
    );

    t.equal(
        typeof uniqRNG.fromIterable,
        'function',
        'exports the .fromIterable() function'
    );
});
