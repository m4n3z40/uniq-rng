# uniq-rng
Simple unique random number generator (ES2015 Generator)

### What it does?

Generates an iterator that iterates through a list of unique random numbers, meaning no matter how big the list is, the generated numbers never gets repeated (in it's specific iterator instance).

### Usage examples

Creating a list of unique integers

```javascript
import { integers } from 'uniq-rng';

// By a infinite generator
const randomNumbers = [];
const iter = integers();

do {
    randomNumbers.push(iter.next().value);
} while(randomNumbers.length < 10);

// OR by passing the size param and a for-of loop
const randomNumbers = [];

for (let value of integers(10)) {
    randomNumbers.push(value);
}

// OR by passing the size param and es2015 spreading notation 
const randomNumbers = [...integers(10)];
```

### API

#### ```integers(size, start = 0, end = Number.POSITIVE_INFINITY)```
#### ```reals(size, start = 0, end = Number.POSITIVE_INFINITY)```
#### ```strings(pool, length = 8)```
#### ```hexes(length = 8)```
#### ```dates(start, end)```
#### ```fromIterator(origin, size = origin.length, sliceStart = 0)```
