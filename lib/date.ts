export function getNumberOfDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
};

export function getPreviousMonthNumberOfDays(year: number, month: number): number {
  return new Date(
    month < 0 ? year - 1 : year,
    month < 0 ? 11 : month,
    0
  ).getDate();
}

export function getNextMonthNumberOfDays(year: number, month: number): number {
  return new Date(
    month > 11 ? year + 1 : year,
    month > 11 ? 0 : month,
    0
  ).getDate();
}

export function getDay(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay();
};
