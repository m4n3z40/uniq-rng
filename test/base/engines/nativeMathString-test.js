import test from 'tape';
import nativeMathString from '../../../src/base/engines/nativeMathString';
import { randomArray, removeDuplicates } from '../../support/helpers';

test('[base/engines/nativeMathString] module', t => {
    t.plan(1);

    t.equal(
        typeof nativeMathString,
        'function',
        'should export a factory function'
    );
});

test('[base/engines/nativeMathString] factory', t => {
    t.plan(3);

    const strings = nativeMathString();

    t.equal(
        typeof strings,
        'object',
        'returns a new object'
    );

    t.equal(
        typeof strings.getNext,
        'function',
        'object returned has a .getNext() method'
    );

    t.equal(
        typeof strings.getIdentity,
        'function',
        'object returned has a .getIdentity() method'
    );
});

test('[base/engines/nativeMathString] instance\'s .getNext() method', t => {
    t.plan(6);

    const strings = nativeMathString();
    const str = strings.getNext();

    t.equal(typeof str, 'string', 'returns a string');
    t.equal(str.length, 8, 'default string length is 8');
    t.false(/[a-zA-Z]+/g.test(str), 'default string is composed of only numbers');

    t.equal(
        strings.getNext({ length: 6 }).length,
        6,
        'supports changing the default length by passing a \'length\' option'
    );

    const customPoolStr = strings.getNext({ pool: 'abcdef' });

    t.true(
        !(/[\d]+/g.test(customPoolStr)) &&
        !(/[g-zA-Z]+/g.test(customPoolStr)) &&
        /^[a-f]+$/g.test(customPoolStr),
        'supports changing the default pool of charaters by passing a \'pool\' option'
    );

    const strList = randomArray(strings, 200, { pool: 'qwerty123456' });

    t.true(
        (strList.length - removeDuplicates(strList).length) < 2,
        'is reliable across many calls, returning hard to predict, random values'
    );
});

test('[base/engines/nativeMathString] instance\'s .getIdentity() method', t => {
    t.plan(1);

    const strings = nativeMathString();
    const str = strings.getNext();

    t.equal(
        strings.getIdentity(str),
        str,
        'returns a valid identifier'
    );
});
