import { Router } from 'express';
import {
  signUpByUserId,
  signInByUserId,
  getCurrentUser,
} from '../service/user-service';
import { validateBody } from '../middlewares/validate-body';
import { decodeJWT } from '../middlewares/decode-jwt';
import passport from '../utils/passport';

const router = Router();

type SignUpUserBody = {
  userId: string;
  password: string;
};

router.post(
  '/signUp',
  validateBody<SignUpUserBody>(['userId', 'password']),
  signUpByUserId,
);

router.post(
  '/signIn',
  validateBody<SignUpUserBody>(['userId', 'password']),
  passport.authenticate('local', { session: false }),
  signInByUserId,
);

router.get('/currentUser', decodeJWT, getCurrentUser);

export default router;
