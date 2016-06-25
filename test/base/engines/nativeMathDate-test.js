import test from 'tape';
import nativeMathDate from '../../../src/base/engines/nativeMathDate';
import { randomArray, isDate } from '../../support/helpers';

test('[base/engines/nativeMathDate] module', t => {
    t.plan(1);

    t.equal(
        typeof nativeMathDate,
        'function',
        'should export a factory function'
    );
});

test('[base/engines/nativeMathDate] factory', t => {
    t.plan(3);

    const dates = nativeMathDate();

    t.equal(
        typeof dates,
        'object',
        'returns a new object'
    );

    t.equal(
        typeof dates.getNext,
        'function',
        'object returned has a .getNext() method'
    );

    t.equal(
        typeof dates.getIdentity,
        'function',
        'object returned has a .getIdentity() method'
    );
});

test('[base/engines/nativeMathDate] instance\'s .getNext() method', t => {
    t.plan(4);

    const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
    const ONE_MONTH = 1000 * 60 * 60 * 24 * 30;
    const dates = nativeMathDate();

    t.true(isDate(dates.getNext()), 'returns a valid date object');

    const startDate = new Date(new Date().getTime() + ONE_WEEK); // +1 Week
    const endDate = new Date(startDate.getTime() + ONE_MONTH); // +1 Month
    const datesAfter1wInFuture = randomArray(dates, 200, { start: startDate });

    t.true(
        datesAfter1wInFuture.every(d => isDate(d) && d >= startDate),
        'supports a \'start\' option so no value lower than \'start\' is generated'
    );

    const datesBefore1mInFuture = randomArray(dates, 200, { end: endDate });

    t.true(
        datesBefore1mInFuture.every(d => isDate(d) && d <= endDate),
        'supports a \'end\' option so no value higher than \'end\' is generated'
    );

    const now = new Date();
    const oneWeekFromNow = new Date(now.getTime() + ONE_WEEK);
    const datesBetweenNowAndNextWeek = randomArray(dates, 200, {
        start: now,
        end: oneWeekFromNow
    });

    t.true(
        datesBetweenNowAndNextWeek.every(d => (
            isDate(d) && d >= now && d <= oneWeekFromNow
        )),
        'support both \'start\' and \'end\' options for specifying a range'
    );
});

test('[base/engines/nativeMathDate] instance\'s .getIdentity() method', t => {
    t.plan(1);

    const dates = nativeMathDate();
    const d = dates.getNext();

    t.equal(
        dates.getIdentity(d),
        d.getTime(),
        'returns a valid identifier'
    );
});
