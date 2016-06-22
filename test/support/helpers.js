import { range } from 'lodash';

export function randomArray(engine, size, options) {
    return range(size).map(() => engine.getNext(options));
}

export function totalOccurrences(value, array) {
    const arrCopy = array.slice();
    let total = 0;

    while (arrCopy.length > 0) {
        if (value === arrCopy.pop()) {
            total++;
        }
    }

    return total;
}

export function removeDuplicates(array) {
    return Array.from(new Set(array));
}

export function isInteger(number) {
    return Number.isInteger(number);
}

export function isDecimal(number) {
    return (typeof number === 'number') && (number % 1 !== 0);
}
