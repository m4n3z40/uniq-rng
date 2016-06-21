const { floor, random } = Math;

const protoMathInteger = {
    getNext({ start, end } = {}) {
        if (start && end) {
            return floor((random() * (end - start + 1)) + start);
        }

        if (start) {
            // When just the start option is passed, the 'end' is double of 'start'
            return floor((random() * (start * 2 + 1)) + start);
        }

        return floor(random() * (end ? end + 1 : 10));
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathInteger() {
    return Object.create(protoMathInteger);
}
