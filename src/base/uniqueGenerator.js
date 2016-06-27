function removeDuplicates(iterable) {
    return Array.from(new Set(iterable));
}

function getSourceIterable({ source }) {
    return source ? removeDuplicates(source) : undefined;
}

function getTotalResultsPossible(size, source) {
    return source && (!size || size > source.length) ?
        source.length :
        size;
}

function removeValue(source, value) {
    if (!source || source.length === 0) return;

    source.splice(source.indexOf(value), 1);
}

function throwIfInvalidEngine(engine) {
    if (
        typeof engine !== 'object' ||
        typeof engine.getNext !== 'function' ||
        typeof engine.getIdentity !== 'function'
    ) {
        throw new Error(
            'No valid engine was provided. ' +
            'An engine must be an object with the methods: ' +
            '.getNext() and .getIdentity().'
        );
    }
}

const proto = {
    getIterator() {
        return this[Symbol.iterator]();
    },
    toArray() {
        return Array.from(this);
    },
    * [Symbol.iterator]() {
        const { options, size, engine } = this;
        const source = getSourceIterable(options);
        const totalResults = getTotalResultsPossible(size, source);
        const nextOptions = Object.assign({}, options, { source });
        const uniqRegistry = new Set;

        for (;;) {
            const nextValue = engine.getNext(nextOptions);
            const valueId = engine.getIdentity(nextValue);

            if (uniqRegistry.has(valueId)) continue;

            uniqRegistry.add(valueId);
            removeValue(source, nextValue);

            yield nextValue;

            if (totalResults === uniqRegistry.size) return;
        }
    }
};

export default function create(engine) {
    if (typeof engine !== 'function') {
        throw new Error('No valid engine factory provided.');
    }

    return (size, options) => {
        const engineInstance = engine(options);

        throwIfInvalidEngine(engineInstance);

        return Object.assign(
            Object.create(proto),
            {
                engine: engineInstance,
                size,
                options
            }
        );
    };
}
