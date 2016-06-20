const proto = {
    * [Symbol.iterator]() {
        const uniqRegistry = new Set;
        const engine = this.engine;

        while (true) {
            const nextValue = engine.getNext(this);
            const valueId = engine.getIdentity(nextValue);

            if (uniqRegistry.has(valueId)) continue;

            uniqRegistry.add(valueId);

            yield nextValue;

            if (this.size && this.size === uniqRegistry.size()) return;
        }
    }
};

export function create(engine) {
    return (size, options) => Object.assign(
        Object.create(proto),
        {
            engine: engine(options),
            size
        },
        options
    );
}
