import { Request, Response, NextFunction } from 'express';
import { verifyJWT } from '../utils/jwt';
import { AuthenticateError } from '../errors/authenticate-error';

export const TOKEN_KEY = 'authorization';

export const decodeJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers[TOKEN_KEY].split(' ')[1];
  if (token) {
    const user = await verifyJWT(token as string);
    req.user = user;
    next();
    return;
  }

  next(new AuthenticateError());
};
