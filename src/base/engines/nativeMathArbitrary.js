const DEFAULT_ARBITRARY_START = 0;
const DEFAULT_ARBITRARY_END = (Number.MAX_SAFE_INTEGER || 9007199254740991) - 1;

const protoMathArbitrary = {
    getNext({ start = DEFAULT_ARBITRARY_START, end = DEFAULT_ARBITRARY_END } = {}) {
        return Math.random() * (end - start) + start;
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathArbitrary() {
    return Object.create(protoMathArbitrary);
}
