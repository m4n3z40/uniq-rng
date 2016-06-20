import nativeMathInteger from './nativeMathInteger';

const REMAINING_VALUES = Symbol();

const integers = nativeMathInteger();
const protoMathPicker = {
    getNext() {
        const remainingValues = this[REMAINING_VALUES];
        const length = remainingValues.length;
        let index = 0;
        let value;

        if (length === 0) {
            throw new Error('No values left in the source iterable.');
        }

        if (length === 1) {
            value = remainingValues[index];
        } else {
            index = integers.getNext({
                start: 0,
                end: length - 1
            });

            value = remainingValues[index];
        }

        remainingValues.splice(index, 1);

        return value;
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathPicker({ source, sliceStart = 0 } = {}) {
    const pickerEngine = Object.create(protoMathPicker);

    pickerEngine[REMAINING_VALUES] = Array.from(source).slice(sliceStart);

    return pickerEngine;
}
