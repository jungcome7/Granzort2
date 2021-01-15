import {
  insertQueryExecuter,
  selectQueryExecuter,
} from '../utils/query-executor';

export type User = {
  id: number;
  name: string;
};

export interface ISocialUser {
  social_id: number;
  name: string;
}

export interface ILoginBody {
  userId: string;
  password: string;
}

export interface ISocialLoginBody {
  socialId: string;
}

export class UserRepo {
  static async createByEmail(email: string) {
    const createByEmailQuery = `
      INSERT INTO 
        user(email, created_at) 
      VALUES
        ("${email}", NOW());
    `;

    return await insertQueryExecuter(createByEmailQuery);
  }

  static async findByEmail(email: string): Promise<User> {
    const findByEmailQuery = `
      SELECT
        id, email
      FROM
        user
      WHERE
        email=${email};
    `;
    const [user, _] = await selectQueryExecuter<User>(findByEmailQuery);
    return user;
  }

  static async findById(id: number): Promise<User> {
    const findByIdQuery = `
      SELECT
        id, email
      FROM
        user
      WHERE
        id=${id};
    `;
    const [user, _] = await selectQueryExecuter<User>(findByIdQuery);
    return user;
  }
}
