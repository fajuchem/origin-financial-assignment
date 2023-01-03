export function newDateNextMonth(): Date {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date;
}

export function subOneMonthFromDate(date: Date): Date {
  const value = new Date(date);
  value.setMonth(value.getMonth() - 1);
  return value;
}

export function addOneMonthFromDate(date: Date): Date {
  const value = new Date(date);
  value.setMonth(value.getMonth() + 1);
  return value;
}

export function diffInMonthsFromToday(date: Date): number {
  const today = new Date();

  return (
    (date.getFullYear() - today.getFullYear()) * 12 +
    (date.getMonth() - today.getMonth())
  );
}
