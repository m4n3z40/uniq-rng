import test from 'tape';
import nativeMathPicker from '../../../src/base/engines/nativeMathPicker';

test('[base/engines/nativeMathPicker] module', t => {
    t.plan(1);

    t.equal(
        typeof nativeMathPicker,
        'function',
        'should export a factory function'
    );
});

test('[base/engines/nativeMathPicker] factory', t => {
    t.plan(3);

    const picker = nativeMathPicker();

    t.equal(
        typeof picker,
        'object',
        'returns a new object'
    );

    t.equal(
        typeof picker.getNext,
        'function',
        'object returned has a .getNext() method'
    );

    t.equal(
        typeof picker.getIdentity,
        'function',
        'object returned has a .getIdentity() method'
    );
});

test('[base/engines/nativeMathPicker] instance\'s .getNext() method', t => {
    t.plan(7);

    const picker = nativeMathPicker();

    t.equal(
        picker.getNext(),
        undefined,
        '\'source\' parameter is needed, otherwise \'undefined\' is returned'
    );

    t.equal(
        picker.getNext({ source: ['foo'] }),
        'foo',
        'if \'source\' has just one value, the value is returned immediately'
    );

    const source = ['foo', 'bar', 'foobar', 1, 2, 3];
    const rndPick = picker.getNext({ source });

    t.true(
        source.some(value => value === rndPick),
        'Picks one value from the source array randomly'
    );

    const totalValues = source.length;
    const srcCopy = source.slice();
    const pickedValues = [];
    let totalIterations = 0;

    while (pickedValues.length < totalValues) {
        const nextValue = picker.getNext({ source: srcCopy });

        pickedValues.push(nextValue);
        srcCopy.splice(srcCopy.indexOf(nextValue), 1);
        totalIterations++;
    }

    t.equal(
        totalIterations,
        totalValues,
        'Is consistent across multiple calls [1]'
    );

    t.equal(
        srcCopy.length,
        0,
        'Is consistent across multiple calls [2]'
    );

    t.equal(
        pickedValues.length,
        totalValues,
        'Is consistent across multiple calls [3]'
    );

    t.true(
        pickedValues.every(v => source.indexOf(v) !== -1),
        'Is consistent across multiple calls [4]'
    );
});

test('[base/engines/nativeMathPicker] instance\'s .getIdentity() method', t => {
    t.plan(1);

    const picker = nativeMathPicker();
    const value = picker.getNext({ source: [1, 'foo', 2, 'bar'] });

    t.equal(
        picker.getIdentity(value),
        value,
        'returns a valid identifier'
    );
});
