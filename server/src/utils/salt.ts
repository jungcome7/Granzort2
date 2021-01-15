import crypto from 'crypto';

const generateRandomHash = (length: number) => {
  return crypto
    .randomBytes(length)
    .toString('base64')
    .replace(/[^A-Za-z0-9]/g, '');
};

export type PasswordAndSalt = {
  password: string;
  salt: string;
};

export const createPasswordHash = (
  password: string,
): Promise<PasswordAndSalt> => {
  return new Promise((resolve, reject) => {
    try {
      const salt: string = generateRandomHash(64);
      crypto.pbkdf2(password, salt, 104236, 64, 'sha512', (err, key) => {
        if (err) {
          reject(err);
        }
        resolve({ password: key.toString('base64'), salt });
      });
    } catch (e) {
      reject(e);
    }
  });
};


export const verifyPassword = (password, passwordHash, salt) => {
    return new Promise((resolve, reject) => {
      try {
        crypto.pbkdf2(password, salt, 104236, 64, 'sha512', (err, key) => {
          if (err) {
            reject(err);
          }
          if (key.toString('base64') === passwordHash) {
            resolve(true);
          }
          resolve(false);
        });
      } catch (e) {
        resolve(false);
      }
    });
  }