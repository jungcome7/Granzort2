import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type UserAction = ActionType<typeof actions>;

export type User = {
  userId: string;
  password: string;
  error: any;
};

export type UserState = User;
