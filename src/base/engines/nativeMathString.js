import nativeMathInteger from './nativeMathInteger';

const DEFAULT_STR_LENGTH = 8;

const integers = nativeMathInteger();
const protoMathString = {
    getNext({ length = DEFAULT_STR_LENGTH, pool = '0123456789' } = {}) {
        const nextIntOpts = { start: 0, end: pool.length - 1 };
        let str = '';

        while (str.length <= length) {
            str += pool.charAt(integers.getNext(nextIntOpts));
        }

        return str;
    },
    getIdentity(value) {
        return value;
    }
};

export default function createMathString() {
    return Object.create(protoMathString);
}
