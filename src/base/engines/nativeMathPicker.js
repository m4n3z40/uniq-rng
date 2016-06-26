import nativeMathInteger from './nativeMathInteger';

const integers = nativeMathInteger();
const protoMathPicker = {
    getNext({ source = [] } = {}) {
        const srcArray = Array.from(source);
        const length = source.length;

        if (length === 0) {
            return undefined;
        }

        if (length === 1) {
            return srcArray[0];
        }

        const index = integers.getNext({
            start: 0,
            end: length - 1
        });

        return srcArray[index];
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathPicker() {
    return Object.create(protoMathPicker);
}
