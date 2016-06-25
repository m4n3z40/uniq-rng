import nativeMathInteger from './nativeMathInteger';

const TODAY = new Date().getTime();
const DEFAULT_DATE_GAP = (1000 * 60 * 60 * 24 * 365 * 50); // 50 Years
const DEFAULT_DATE_START = TODAY - (DEFAULT_DATE_GAP / 2);

const integers = nativeMathInteger();
const protoMathDate = {
    getNext({ start = DEFAULT_DATE_START, end } = {}) {
        const startInMs = new Date(start).getTime();
        const nextIntOpts = {
            start: startInMs,
            end: end ? new Date(end).getTime() : startInMs + DEFAULT_DATE_GAP
        };

        return new Date(integers.getNext(nextIntOpts));
    },
    getIdentity(value) {
        return value.getTime();
    }
};

export default function createMathDate() {
    return Object.create(protoMathDate);
}
