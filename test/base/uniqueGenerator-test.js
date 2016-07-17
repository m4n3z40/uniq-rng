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

function stubEngineMethodCalls(engine, expectedValues) {
    expectedValues.forEach((value, idx) => {
        engine.getNext.onCall(idx).returns(value);
        engine.getIdentity.onCall(idx).returns(value);
    });
}

function createIterable(size, options) {
    const fakeEngine = createEngineStub();
    const generator = uniqueGenerator(fakeEngine);

    return generator(size, options);
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

test('[base/uniqueGenerator] iterable object', t => {
    t.plan(3);

    const SIZE = 20;
    const iterable = createIterable(SIZE, { start: 10, end: 10 + SIZE });

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
});

test('[base/uniqueGenerator] iterable\'s iterator protocol compliance', t => {
    t.plan(4);

    const SIZE = 20;
    const options = { start: 10, end: 10 + SIZE };
    const iterable = createIterable(SIZE, options);
    const expectedArray = range(options.start, options.end);

    t.equal(
        typeof iterable[Symbol.iterator],
        'function',
        'should have a [Symbol.iterator]() method'
    );

    stubEngineMethodCalls(iterable.engine, expectedArray);

    const actualArray = [...iterable];

    t.equal(
        iterable.engine.getNext.callCount,
        SIZE,
        'should consistently delegate the generation of values to the engine'
    );
    t.equal(
        iterable.engine.getIdentity.callCount,
        SIZE,
        'should consistently delegate the generation of value ids to the engine'
    );
    t.deepEqual(
        actualArray,
        expectedArray,
        'should generate an array of values through es6 spread'
    );
});

test('[base/uniqueGenerator] iterable\'s .getIterator() mehod', t => {
    t.plan(6);

    const SIZE = 20;
    const options = { start: 10, end: 10 + SIZE };
    const iterable = createIterable(SIZE, options);
    const expectedArray = range(options.start, options.end);
    const actualArray = [];
    const it = iterable.getIterator();

    stubEngineMethodCalls(iterable.engine, expectedArray);

    t.equal(typeof it.next, 'function', 'should return a JS iterator object');

    let currentItState = it.next();

    t.equal(
        typeof currentItState.value,
        'number',
        'iterator.next() should return an object with a .value property'
    );
    t.equal(
        typeof currentItState.done,
        'boolean',
        'iterator.next() should return an object with a .done property'
    );

    while (!currentItState.done) {
        actualArray.push(currentItState.value);

        currentItState = it.next();
    }

    t.equal(
        iterable.engine.getNext.callCount,
        SIZE,
        'iterator should consistently delegate the generation of values to the engine'
    );
    t.equal(
        iterable.engine.getIdentity.callCount,
        SIZE,
        'iterator should consistently delegate the generation of value ids to the engine'
    );
    t.deepEqual(
        actualArray,
        expectedArray,
        'iterator should generate a list of values returned from the engine calls'
    );
});

test('[base/uniqueGenerator] iterable\'s .toArray() method', t => {
    t.plan(3);

    const SIZE = 20;
    const options = { start: 10, end: 10 + SIZE };
    const iterable = createIterable(SIZE, options);
    const expectedArray = range(options.start, options.end);

    stubEngineMethodCalls(iterable.engine, expectedArray);

    const actualArray = iterable.toArray();

    t.equal(
        iterable.engine.getNext.callCount,
        SIZE,
        'should consistently delegate the generation of values to the engine'
    );
    t.equal(
        iterable.engine.getIdentity.callCount,
        SIZE,
        'should consistently delegate the generation of value ids to the engine'
    );
    t.deepEqual(
        actualArray,
        expectedArray,
        'should generate an array of values returned from the engine calls'
    );
});
