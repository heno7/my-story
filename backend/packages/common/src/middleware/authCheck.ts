import { NextFunction, Request, Response } from 'express';
import { JwtPayload, Secret, VerifyOptions, verify } from 'jsonwebtoken';
import { promisify } from 'node:util';
import { NotFoundTokenError, ForbiddenError } from '../error';

const verifyPromise = promisify<string, Secret, VerifyOptions, JwtPayload>(
  verify,
);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      context: {
        [key: string]: unknown;
        user: TokenPayload;
        ownerResourceId?: string | number;
      };
    }
  }
}

type TokenPayload = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export interface ResourceGetter {
  (req: Request, resourceIdName: string): Promise<string | number>;
}

export function addCurrentAccessResourceOwnerInfo(
  resourceIdName: string,
  resourceGetter: ResourceGetter,
) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const ownerResourceId = await resourceGetter(req, resourceIdName);
    req.context.ownerResourceId = ownerResourceId;
    next();
  };
}

export async function verifyToken(
  token: string,
): Promise<TokenPayload> | never {
  const SIGN_ALGORITHM = 'RS256';

  const secret = process.env.JWT_PUBLIC_KEY as string;
  const decoded = await verifyPromise(token, secret, {
    algorithms: [SIGN_ALGORITHM],
  });
  return decoded as TokenPayload;
}

export async function checkCurrentUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    throw new NotFoundTokenError('token is not found');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new NotFoundTokenError('token is not found');
  }

  const decoded = await verifyToken(token);
  if (!req.context) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req.context = {} as any;
  }
  req.context.user = decoded;

  next();
}

export function checkExactRole(role: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.context.user.role === role) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource. Required role: ${role}`,
    );
  };
}

export function checkAtLeastRole(role: string, allRoles: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    const allowUserRoleIndex = allRoles.indexOf(role);
    const currentUserRoleIndex = allRoles.indexOf(req.context.user.role);
    if (currentUserRoleIndex >= allowUserRoleIndex) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource. Require at least role: ${role}`,
    );
  };
}

export function checkAllowRoles(roles: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (roles.includes(req.context.user.role)) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource. Allowed roles: ${roles.join(
        ', ',
      )}`,
    );
  };
}

export function checkCurrentOwner() {
  return function (req: Request, res: Response, next: NextFunction) {
    if (
      req.context.user.id.toString() === req.context.ownerResourceId?.toString()
    ) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource. Required userId: ${req.params.userId}`,
    );
  };
}

export function checkCurrentOwnerAndAllowRoles(roles: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (
      roles.includes(req.context.user.role) ||
      req.context.user.id.toString() === req.context.ownerResourceId?.toString()
    ) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource. Allowed roles: ${roles.join(
        ', ',
      )}`,
    );
  };
}

export function checkCurrentOwnerAndAtLeastRole(
  role: string,
  allRoles: string[],
) {
  return function (req: Request, res: Response, next: NextFunction) {
    const allowUserRoleIndex = allRoles.indexOf(role);
    const currentUserRoleIndex = allRoles.indexOf(req.context.user.role);
    if (
      currentUserRoleIndex >= allowUserRoleIndex ||
      req.context.user.id.toString() === req.context.ownerResourceId?.toString()
    ) {
      return next();
    }
    throw new ForbiddenError(
      `You do not have permission to access this resource.Only owner or require at least role: ${role}`,
    );
  };
}
