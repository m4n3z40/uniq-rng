const { random } = Math;

const protoMathArbitrary = {
    getNext({ start, end } = {}) {
        if (start && end) {
            return (random() * (end - start)) + start;
        }

        if (start) {
            return random() + start;
        }

        return random() * (end || 1);
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathArbitrary() {
    return Object.create(protoMathArbitrary);
}
