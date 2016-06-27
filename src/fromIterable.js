import nativeMathPicker from './base/engines/nativeMathPicker';
import uniqueGenerator from './base/uniqueGenerator';

export default function fromIterable(source, size) {
    return uniqueGenerator(nativeMathPicker)(size, { source });
}
