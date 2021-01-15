import jwt from 'jsonwebtoken';

export const createJWT = (userId: number): string => {
    return jwt.sign({ userId }, process.env.JWT_TOKEN || '');
  };