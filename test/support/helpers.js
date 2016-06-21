import { range } from 'lodash';

export function randomArray(engine, size, options) {
    return range(size).map(() => engine.getNext(options));
}

export function isInteger(number) {
    return Number.isInteger(number);
}

export function isDecimal(number) {
    return (typeof number === 'number') && (number % 1 !== 0);
}
