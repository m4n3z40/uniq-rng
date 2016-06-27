import test from 'tape';
import sinon from 'sinon';
import { range } from 'lodash';
import uniqueGenerator from '../../src/base/uniqueGenerator';

function createEngineStub() {
    const fakeEngine = {
        getNext() {},
        getIdentity() {}
    };

    sinon.stub(fakeEngine, 'getNext');
    sinon.stub(fakeEngine, 'getIdentity');

    return sinon.spy(() => fakeEngine);
}

test('[base/uniqueGenerator] module', t => {
    t.plan(1);

    t.equal(
        typeof uniqueGenerator,
        'function',
        'should export a factory function'
    );
});

test('[base/uniqueGenerator] factory', t => {
    t.plan(4);

    t.throws(
        uniqueGenerator,
        'should throw an error if no engine factory is provided'
    );
    t.throws(
        uniqueGenerator.bind(null, {}),
        'should throw an error if an invalid engine factory is provided'
    );

    const fakeEngine = createEngineStub();
    const generator = uniqueGenerator(fakeEngine);

    t.false(fakeEngine.called, 'should not create the engine instance eagerly');
    t.equal(typeof generator, 'function', 'should return a generator function');
});

test('[base/uniqueGenerator] generator function', t => {
    t.plan(7);

    const invalidGenerator = uniqueGenerator(() => ({}));

    t.throws(
        invalidGenerator,
        'should throw an error if an invalid engine is returned from the provided factory'
    );

    const SIZE = 20;
    const fakeEngine = createEngineStub();
    const generator = uniqueGenerator(fakeEngine);
    const options = { start: 10, end: 80 };
    const iterable = generator(SIZE, options);

    t.true(
        fakeEngine.calledOnce,
        'should call the engine factory once per call'
    );
    t.true(
        fakeEngine.calledWithExactly(options),
        'should pass the options object down to the engine factory'
    );

    t.equal(typeof iterable, 'object', 'should return an object');

    t.equal(
        iterable.engine,
        fakeEngine(),
        'should assign the engine to the returned iterable'
    );
    t.equal(
        iterable.size,
        SIZE,
        'should assign the configured size param to the returned iterable'
    );
    t.equal(
        iterable.options,
        options,
        'should assign the configured options param to the returned iterable'
    );
});

test('[base/uniqueGenerator] iterable', t => {
    const SIZE = 20;
    const fakeEngine = createEngineStub();
    const fakeEngineInstance = fakeEngine();
    const generator = uniqueGenerator(fakeEngine);
    const iterable = generator(SIZE, { start: 10, end: 30 });

    t.equal(
        typeof iterable[Symbol.iterator],
        'function',
        'should use the iterable protocol (Symbol.iterator)'
    );
    t.equal(
        typeof iterable.getIterator,
        'function',
        'should have a .getIterator() method for high level iterator access'
    );
    t.equal(
        typeof iterable.toArray,
        'function',
        'should have a .toArray() method to turn the current iterable into an array'
    );

    range(SIZE).forEach(idx => {
        const value = 10 + idx;

        fakeEngineInstance.getNext.onCall(idx).returns(value);
        fakeEngineInstance.getIdentity.onCall(idx).returns(value);
    });

    const expectedArray = [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29
    ];
    const actualArray = [];
    const it = iterable.getIterator();
    let currentItState = it.next();

    while (!currentItState.done) {
        actualArray.push(currentItState.value);

        currentItState = it.next();
    }

    t.equal(
        fakeEngineInstance.getNext.callCount,
        SIZE,
        'should consistently delegate the generation of values to the engine'
    );
    t.equal(
        fakeEngineInstance.getIdentity.callCount,
        SIZE,
        'should consistently delegate the generation of values ids to the engine'
    );
    t.deepEqual(
        actualArray,
        expectedArray,
        'should generate a list of values returned from the engine calls'
    );

    t.end();
});
