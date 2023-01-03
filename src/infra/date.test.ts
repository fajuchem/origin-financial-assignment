import {
  addOneMonthFromDate,
  diffInMonthsFromToday,
  subOneMonthFromDate,
} from './date';

describe('date', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2020-12-08T22:27:44.000Z'));
  });

  it('subtract a month from a date', () => {
    const date = subOneMonthFromDate(new Date('2020-12-08T22:27:44.000Z'));

    expect(date).toEqual(new Date('2020-11-08T22:27:44.000Z'));
  });

  it('add a month from a date', () => {
    const date = addOneMonthFromDate(new Date('2020-12-08T22:27:44.000Z'));

    expect(date).toEqual(new Date('2021-01-08T22:27:44.000Z'));
  });

  it('return the difference in months from a specific date and today', () => {
    expect(diffInMonthsFromToday(new Date('2022-12-08T22:27:44.000Z'))).toEqual(
      24
    );
    expect(diffInMonthsFromToday(new Date('2020-12-08T22:27:44.000Z'))).toEqual(
      0
    );
    expect(diffInMonthsFromToday(new Date('2020-11-08T22:27:44.000Z'))).toEqual(
      -1
    );
  });
});
