import myIntegers from './integers';
import myDecimals from './decimals';
import myStrings, { pools as stringPools } from './strings';
import myHexes from './hexes';
import myDates from './dates';
import myFromIterable from './fromIterable';

myStrings.pools = stringPools;

export const integers = myIntegers;
export const decimals = myDecimals;
export const strings = myStrings;
export const hexes = myHexes;
export const dates = myDates;
export const fromIterable = myFromIterable;
