import nativeMathArbitrary from './base/engines/nativeMathArbitrary';
import uniqueGenerator from './base/uniqueGenerator';

export default function reals(size, start, end) {
    return uniqueGenerator(nativeMathArbitrary)(size, { start, end });
}
