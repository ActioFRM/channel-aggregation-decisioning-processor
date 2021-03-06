import Router from 'koa-router';
import { execute } from './controllers/executeController';
import { healthCheck } from './controllers/healthcheck';

const router = new Router();

// health checks
router.get('/health', healthCheck);
router.post('/execute', execute);

export default router;
