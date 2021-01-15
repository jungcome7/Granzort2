/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';
import { PasswordAndSalt } from '../utils/salt';

export type User = {
  id: number;
  user_id: string;
};

export class UserRepo {
  static async createByUserId(
    userId: string,
    passwordAndSalt: PasswordAndSalt,
  ) {
    const { password, salt } = passwordAndSalt;
    const createByUserIdQuery = `
      INSERT INTO 
        user(user_id, password, salt, created_at) 
      VALUES
        ("${userId}", "${password}", "${salt}", NOW());
    `;

    return await insertQueryExecuter(createByUserIdQuery);
  }

  static async findByUserId(userId: string): Promise<User> {
    const findByUserIdQuery = `
      SELECT
        id, user_id
      FROM
        user
      WHERE
        user_id=${userId};
    `;
    const [user, _] = await selectQueryExecuter<User>(findByUserIdQuery);
    return user;
  }

  static async findById(id: number): Promise<User> {
    const findByIdQuery = `
      SELECT
        id, user_id
      FROM
        user
      WHERE
        id=${id};
    `;
    const [user, _] = await selectQueryExecuter<User>(findByIdQuery);
    return user;
  }
}
