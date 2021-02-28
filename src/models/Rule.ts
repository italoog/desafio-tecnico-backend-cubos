import { v4 as uuid } from 'uuid';

interface IntervalsData {
  start: string;
  end: string;
}
interface DaysWeekData {
  day: string;
}

class Rule {
  id: string;

  daily: boolean;

  weekly: boolean;

  day: string;

  daysWeek: DaysWeekData[];

  intervals: IntervalsData[];

  constructor({ daily, weekly, day, daysWeek, intervals }: Omit<Rule, 'id'>) {
    this.id = uuid();
    this.daily = daily;
    this.weekly = weekly;
    this.day = day;
    this.daysWeek = daysWeek;
    this.intervals = intervals;
  }
}

export default Rule;
