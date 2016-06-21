const { random } = Math;

const protoMathArbitrary = {
    getNext({ start = 0, end } = {}) {
        if (start && end) {
            return (random() * (end - start)) + start;
        }

        if (start) {
            // When just the start option is passed, the 'end' is double of 'start'
            return (random() * (start * 2)) + start;
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
