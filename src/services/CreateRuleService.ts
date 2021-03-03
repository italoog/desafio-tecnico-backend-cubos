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
    if (daily && weekly) {
      throw Error(
        'Invalid rule. You cannot have a rule that is daily and weekly at the same time.',
      );
    }

    if (daily && day) {
      throw Error(
        'Invalid rule. It is not possible to have a daily rule stating the day.',
      );
    }

    if (weekly && day) {
      throw Error(
        'Invalid rule. It is not possible to have a weekly rule stating the day.',
      );
    }

    if (!daily && !weekly && !day) {
      throw Error('Invalid rule. A type of rule must be informed.');
    }

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
