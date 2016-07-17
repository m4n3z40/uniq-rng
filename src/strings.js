import nativeMathString from './base/engines/nativeMathString';
import uniqueGenerator from './base/uniqueGenerator';

const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const NUMERIC = '0123456789';
const ALPHA_NUM = ALPHA_LOWER + NUMERIC;
const ALL_ALPHA_NUM = ALPHA_LOWER + ALPHA_UPPER + NUMERIC;
const HEXA_DECIMAL = ALPHA_NUM + ALPHA_LOWER.slice(0, 6);

export const pools = {
    ALPHA_LOWER,
    ALPHA_UPPER,
    NUMERIC,
    ALPHA_NUM,
    ALL_ALPHA_NUM,
    HEXA_DECIMAL
};

export default function strings(size, length, pool = ALL_ALPHA_NUM) {
    return uniqueGenerator(nativeMathString)(size, { length, pool });
}

strings.pools = pools;
