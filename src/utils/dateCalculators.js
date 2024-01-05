import { format, getDate, getMonth } from "date-fns";

export function startDateCalculator(rashi) {

  const StartDate = new Date(rashi.startDate);

  const startMonth = getMonth(StartDate) + 1;
  const editedStartMonth = startMonth < 9 ? `0${startMonth}` : startMonth;
  const ansStartMonth = format(editedStartMonth, "MMM");

  const startDay = getDate(StartDate);
  const ansStartDay = startDay < 9 ? `0${startDay}` : startDay;

  return `${ansStartDay}-${ansStartMonth}`;
}


export function endDateCalculator(rashi) {

  const EndDate = new Date(rashi.endDate);

  const endMonth = getMonth(EndDate) + 1;
  const editedEndMonth = endMonth < 9 ? `0${endMonth}` : endMonth;
  const ansEndMonth = format(editedEndMonth, "MMM");

  const endDay = getDate(EndDate);
  const ansEndDay = endDay < 9 ? `0${endDay}` : endDay;

  return `${ansEndDay}-${ansEndMonth}`;
}

