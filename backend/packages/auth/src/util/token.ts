import {
  JwtPayload,
  Secret,
  SignOptions,
  VerifyOptions,
  sign,
  verify,
} from 'jsonwebtoken';
import { promisify } from 'node:util';

const signPromsie = promisify<object, Secret, SignOptions, string>(sign);
const verifyPromise = promisify<string, Secret, VerifyOptions, JwtPayload>(
  verify,
);

const SIGN_ALGORITHM = 'RS256';

export async function generateToken(
  info: object,
  expiresIn: string | number,
): Promise<string> {
  const secret = process.env.JWT_PRIVATE_KEY as string;
  return await signPromsie(info, secret, {
    algorithm: SIGN_ALGORITHM,
    expiresIn: expiresIn as never,
  });
}

export async function verifyToken(token: string): Promise<JwtPayload> | never {
  // eslint-disable-next-line no-useless-catch
  try {
    const secret = process.env.JWT_PUBLIC_KEY as string;
    const decoded = await verifyPromise(token, secret, {
      algorithms: [SIGN_ALGORITHM],
    });
    return decoded;
  } catch (error) {
    throw error;
  }
}
