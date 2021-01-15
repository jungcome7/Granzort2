import { granzort } from './granzort';

type CreateUser = {
  userId: string;
  password: string;
};

export const createUser = async ({ userId, password }: CreateUser) => {
  const { data } = await granzort.post('/user/signUp', { userId, password });
  return data;
};
