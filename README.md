# uniq-rng
Simple unique random number generator (especifically, ES2015 Generator)

## What it does?

Generates an iterable that iterates through a list of unique random values, meaning no matter how big the list is, the generated values never gets repeated (in it's specific iterable instance).

## Usage examples

Creating a list of unique integers

```javascript
import { integers } from 'uniq-rng';

// By a infinite generator
const randomNumbers = [];
const iter = integers();

do {
    randomNumbers.push(iter.next().value);
} while(randomNumbers.length < 10);

console.log(randomNumbers);
// => [344, 234, 254356, 23423, 234325, 2455, 345345, 2323246,768768, 676723]

// OR by passing the size param and using a for-of loop
const randomNumbers = [];

for (let value of integers(10)) {
    randomNumbers.push(value);
}

console.log(randomNumbers);
// => [344, 234, 254356, 23423, 234325, 2455, 345345, 2323246,768768, 676723]

// OR by using ES2015's Array.from()
const randomNumbers = Array.from(integers(10));
// => [344, 234, 254356, 23423, 234325, 2455, 345345, 2323246,768768, 676723]

// OR by using ES2015's spreading notation
const randomNumbers = [...integers(10)];
// => [344, 234, 254356, 23423, 234325, 2455, 345345, 2323246,768768, 676723]

// OR by ES2015's destructuring assignment
const [numberA, numberB] = integers(2);
// => numberA = 35, numberB = 968
```

## API

### ```integers([size=Infinity], [start], [end])```

Creates an ```iterable``` that generates unique (for this instance) random integer number values.

#### Arguments

1. ```[size=Infinity]``` (number): The size of the iterator (total amount of values that can be generated).
2. ```[start]``` (number): The minimum value that a generated random integer can have.
3. ```[end]``` (number): The maximum value that a generated random integer can have.

#### Returns

[(Iterable\<number\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.

---

### ```decimals([size=Infinity], [start], [end])```

Creates an ```iterable``` that generates unique (for this instance) random real number values.

#### Arguments

1. ```[size=Infinity]``` (number): The size of the iterator (total amount of values that can be generated).
2. ```[start]``` (number): The minimum value that a generated random real number can have.
3. ```[end]``` (number): The maximum value that a generated random real number can have.

#### Returns

[(Iterable\<number\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.

---

### ```strings([size=Infinity], [length=8], [pool=ALL_ALPHA_NUM])```

Creates an ```iterable``` that generates unique (for this instance) string random values based on a given pool.

#### Arguments

1. ```[size=Infinity]``` (number): The size of the iterator (total amount of values that can be generated).
2. ```[length=8]``` (number): The length of each string to be generated.
3. ```[pool=ALL_ALPHA_NUM]``` (string|Array): The list of characters for the strings to be generated upon.

#### Returns

[(Iterable\<string\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.

---

### ```hexes([size=Infinity], [length=8])```

Creates an ```iterable``` that generates unique (for this instance) random hexa-decimal values.

#### Arguments

1. ```[size=Infinity]``` (number): The size of the iterator (total amount of values that can be generated).
2. ```[length=8]``` (number): The length of each hexa-decimal to be generated.

#### Returns

[(Iterable\<string\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.

---

### ```dates([size=Infinity], [start=DEFAULT_DATE_START], [end=DEFAULT_DATE_END])```

Creates an ```iterable``` that generates unique (for this instance) random date objects.

#### Arguments

1. ```[size=Infinity]``` (number): The size of the iterator (total amount of objects that can be generated).
2. ```[start=DEFAULT_DATE_START]``` (Date|number|string): The minimum value that a generated random date object can have.
3. ```[end=DEFAULT_DATE_END]``` (Date|number|string): The maximum value that a generated random date object can have.

#### Returns

[(Iterable\<Date\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.

---

### ```fromIterable(source, [size=source.length], [sliceStart=0])```

Creates an ```iterable``` that pulls values randomly from another ```iterable```.

#### Arguments
1. ```source``` \(Iterable\<any\>\):
2. ```[size=source.length]``` (number): The size of the iterator (total amount of objects that can be generated).
3. ```[sliceStart=0]``` (number): Start pulling values from this position of the ```origin```.

#### Returns

[(Iterable\<any\>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols): An iterable ```object```.
