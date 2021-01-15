import { Request, Response } from 'express';
import { UserRepo } from '../repository/user-repository';
import { createJWT } from '../utils/jwt';
import { createPasswordHash, PasswordAndSalt } from '../utils/salt';

export const signUpByUserId = async (req: Request, res: Response) => {
  const { userId, password } = req.body;
  const passwordAndSalt: PasswordAndSalt = await createPasswordHash(password);
  const insertId = UserRepo.createByUserId(userId, passwordAndSalt);
  res.status(201).json(insertId);
};

export const signInByUserId = async (req: Request, res: Response) => {
  const accessToken = createJWT(req.user.user_id)
  console.log(req)
  res.status(200).json({ accessToken });
};

// exports.loginController = async (req, res) => {
//   const accessToken = createAccessToken(req.user.id);
//   res.status(200).json({ accessToken });
// };

// export const signOut = async (req: Request, res: Response) => {};

// export const getCurrentUser = async (req: Request, res: Response) => {
//   res.json(req.user);
// };
