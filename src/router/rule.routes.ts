import { Router } from 'express';
import { v4 as uuid } from 'uuid';
import fs from 'fs';

const rulesRouter = Router();

const rules = './src/database/db.json';

fs.readFile(rules, 'utf8');

rulesRouter.post('/', (request, response) => {
  const { daily, weekly, day, daysWeek, intervals } = request.body;

  // const FindRuleInSameDateAndTime = rules.find(rule => hourIsEqual(intervals[start], );

  const hourIsEqual = (hourX: object, hourY: object): boolean => {
    return hourX === hourY;
  };

  const rule = {
    id: uuid(),
    daily,
    weekly,
    day,
    daysWeek,
    intervals,
  };

  // rules.push(rule);

  return response.json(rule);
});

export default rulesRouter;
