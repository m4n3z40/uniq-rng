import nativeMathInteger from './base/engines/nativeMathInteger';
import uniqueGenerator from './base/uniqueGenerator';

export default function integers(size, start, end) {
    return uniqueGenerator(nativeMathInteger)(size, { start, end });
}
