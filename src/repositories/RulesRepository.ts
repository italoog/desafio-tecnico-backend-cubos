/* eslint-disable class-methods-use-this */
import Rule from '../models/Rule';

import { writeRule, readRule, deleteRule } from '../database';

interface IntervalsData {
  start: string;
  end: string;
}
interface DaysWeekData {
  day: string;
}

interface CreateRuleDTO {
  daily: boolean;
  weekly: boolean;
  day: string;
  daysWeek: DaysWeekData[];
  intervals: IntervalsData[];
}

class RulesRepository {
  public all(): Rule[] {
    return readRule();
  }

  // public findByDay(day: string): Rule | null {
  //   const findDay = find(day);

  //   return findDay || null;
  // }

  public create({
    daily,
    weekly,
    day,
    daysWeek,
    intervals,
  }: CreateRuleDTO): Rule {
    const rule = new Rule({ daily, weekly, day, daysWeek, intervals });

    writeRule(rule);

    return rule;
  }

  public delete(id: string): boolean {
    return deleteRule(id);
  }
}

export default RulesRepository;
