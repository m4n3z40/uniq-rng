const DEFAULT_INTEGER_START = 0;
const DEFAULT_INTEGER_END = Number.MAX_SAFE_INTEGER || 9007199254740991;

const protoMathInteger = {
    getNext({ start = DEFAULT_INTEGER_START, end = DEFAULT_INTEGER_END } = {}) {
        return Math.floor(Math.random() * (end - start + 1) + start);
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathInteger() {
    return Object.create(protoMathInteger);
}
