/* eslint-disable @typescript-eslint/class-name-casing */
import { Router } from 'express';

import RulesRepository from '../repositories/RulesRepository';
import CreateRuleService from '../services/CreateRuleService';
import DeleteRuleService from '../services/DeleteRuleServise';

const rulesRouter = Router();
const rulesRepository = new RulesRepository();

rulesRouter.get('/', (request, response) => {
  const rules = rulesRepository.all();

  return response.json(rules);
});

rulesRouter.post('/', (request, response) => {
  try {
    const { daily, weekly, day, daysWeek, intervals } = request.body;

    const createRule = new CreateRuleService(rulesRepository);

    const rule = createRule.execute({
      daily,
      weekly,
      day,
      daysWeek,
      intervals,
    });

    return response.json(rule);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

rulesRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteRule = new DeleteRuleService(rulesRepository);

    deleteRule.execute({ id });

    return response.send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default rulesRouter;
