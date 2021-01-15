import { Router } from 'express';
import { signUpByUserId } from '../service/user-service';

const router = Router();

router.post('/signUp', signUpByUserId);

router.post('/signIn');

export default router;
