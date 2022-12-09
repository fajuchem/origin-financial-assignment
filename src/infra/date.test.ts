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

  it('sub a month when clicked on next button', () => {
    const date = subOneMonthFromDate(new Date('2020-12-08T22:27:44.000Z'));

    expect(date).toEqual(new Date('2020-11-08T22:27:44.000Z'));
  });

  it('add a month when clicked on next button', () => {
    const date = addOneMonthFromDate(new Date('2020-12-08T22:27:44.000Z'));

    expect(date).toEqual(new Date('2021-01-08T22:27:44.000Z'));
  });

  it('diff in months', () => {
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
