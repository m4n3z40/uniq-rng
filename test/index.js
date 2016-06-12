import test from 'tape';
import uniqRNG from '../src';

test('uniqRNG module', t => {
    t.ok(uniqRNG, 'exports the main util as the default export');

    t.end();
});
