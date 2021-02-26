import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ massage: 'Hello' }));

export default routes;
