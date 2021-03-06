/* eslint-disable @typescript-eslint/no-unused-vars */
import { pool } from '../connection/db';
import { databaseErrorHandler } from './error-handler';
import { promiseHandler } from './promise-handler';

export type MysqlInsertOrUpdateResult = {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  serverStatus: number;
  warningCount: number;
  message: string;
  protocol41: boolean;
  changedRows: number;
};

export const selectQueryExecuter = async <T>(query: string): Promise<T[]> => {
  const conn = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(conn.query(query));

  databaseErrorHandler(error);

  const [result, _] = queryResult;
  conn.release();
  return result as T[];
};

export const insertQueryExecuter = async (query: string): Promise<number> => {
  const conn = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(conn.query(query));

  databaseErrorHandler(error);

  const [{ insertId }, _] = queryResult;
  conn.release();
  return insertId;
};

export const updateOrDeleteQueryExecuter = async (
  query: string,
): Promise<number> => {
  const conn = await pool.getConnection();
  const [queryResult, error] = await promiseHandler(conn.query(query));

  databaseErrorHandler(error);

  const [{ affectedRows }, _] = queryResult;
  conn.release();
  return affectedRows;
};

export const transactionQueryExecuter = async (...queries: Promise<any>[]) => {
  const conn = await pool.getConnection();
  try {
    conn.beginTransaction();
    for (const query of queries) {
      await promiseHandler(query);
    }
    conn.commit();
    return true;
  } catch (e) {
    conn.rollback();
    return false;
  }
};
