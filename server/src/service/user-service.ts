import { Request, Response } from 'express';

export const signUpByEmail = async (req: Request, res: Response) => {
  const { email } = req.body;
};

export const signInByEmail = async (req: Request, res: Response) => {};

export const signOut = async (req: Request, res: Response) => {};

export const getCurrentUser = async (req: Request, res: Response) => {
  res.json(req.user);
};
