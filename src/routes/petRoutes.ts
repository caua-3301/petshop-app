import { Router } from 'express'
import { status, save, findAll, update, updateOnce, deletePet } from '../controllers/petController';

const petRouter = Router();

petRouter.get('/status', status);
petRouter.get('/', findAll);
petRouter.post('/', save);
petRouter.put('/', update);
petRouter.patch('/:id/vaccinated', updateOnce)
petRouter.delete('/', deletePet)

export default petRouter;