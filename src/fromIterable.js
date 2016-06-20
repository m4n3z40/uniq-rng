import nativeMathPicker from './base/engines/nativeMathPicker';
import uniqueGenerator from './base/uniqueGenerator';

export default function fromIterable(source, size, sliceStart = 0) {
    const arrSource = Array.from(source);

    return uniqueGenerator(nativeMathPicker)(
        size || arrSource.length,
        { source, sliceStart }
    );
}
