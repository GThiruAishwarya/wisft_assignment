import { Router } from 'express';
import { loadUsers } from '../controllers/userController';

const router = Router();

router.get('/load', loadUsers);
// Additional routes for DELETE, GET, PUT would go here

export default router;
