import { granzort, granzortAuth } from './granzort';

type User = {
  userId: string;
  password: string;
};

const signUp = async ({ userId, password }: User) => {
  const { data } = await granzort.post('/user/signUp', { userId, password });
  return data;
};

const signIn = async (token: string, params: User) => {
  const { data } = await granzortAuth(token).post<User>('/user/signIn', params);
  return data;
};

const getCurrentUser = async (token: string) => {
  const { data } = await granzortAuth(token).get('/user/currentUser');
  return data;
};

export default {
  signUp,
  signIn,
  getCurrentUser,
};
