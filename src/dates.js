import nativeMathDate from './base/engines/nativeMathDate';
import uniqueGenerator from './base/uniqueGenerator';

export default function dates(size, start, end) {
    return uniqueGenerator(nativeMathDate)(size, { start, end });
}
