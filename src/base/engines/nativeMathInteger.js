const { floor, random } = Math;

const protoMathInteger = {
    getNext({ start, end } = {}) {
        if (start && end) {
            return floor(random() * (end - start + 1) + start);
        }

        if (start) {
            return floor(random() + start);
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
