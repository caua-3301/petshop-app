import { Router } from 'express'
import { save, status } from '../controllers/petshopController';

const petshopRouter = Router();

petshopRouter.post('/', save);
petshopRouter.get('/', status);

export default petshopRouter;