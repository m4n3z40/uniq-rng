import strings, { pools } from './strings';

export default function hexes(size, length) {
    return strings(size, length, pools.HEXA_DECIMAL);
}
