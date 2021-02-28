import Rule from '../models/Rule';

import RulesRepository from '../repositories/RulesRepository';

interface IntervalsData {
  start: string;
  end: string;
}
interface DaysWeekData {
  day: string;
}

interface Request {
  daily: boolean;
  weekly: boolean;
  day: string;
  daysWeek: DaysWeekData[];
  intervals: IntervalsData[];
}

class CreateRuleService {
  private rulesRepository: RulesRepository;

  constructor(rulesRepository: RulesRepository) {
    this.rulesRepository = rulesRepository;
  }

  public execute({ daily, weekly, day, daysWeek, intervals }: Request): Rule {
    // const findRuleInSameDay = this.rulesRepository.findByDay(day);

    // if (findRuleInSameDay) {
    //   throw Error('This rule is already saved');
    // }

    const rule = this.rulesRepository.create({
      daily,
      weekly,
      day,
      daysWeek,
      intervals,
    });

    return rule;
  }
}

export default CreateRuleService;
