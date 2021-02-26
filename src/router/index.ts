import { Router } from 'express';
import rulesRouter from './rule.routes';

const routes = Router();

routes.use('/rules', rulesRouter);

export default routes;
