/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import prisma from '../prisma/prismaClient';

const PROTO_PATH = path.resolve(__dirname, './proto/auth.proto');
const PORT = 9999;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const auth: any = grpc.loadPackageDefinition(packageDefinition).auth;

export function startRpcServer() {
  const server = new grpc.Server();
  server.addService(auth.Auth.service, {
    checkUserExist: checkUserExist,
  });
  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log(`auth rpc service running in port ${PORT}`);
    },
  );
}

async function checkUserExist(call: any, callback: any) {
  const userName = call.request.name;

  const existUser = await prisma.auth_user.findFirst({
    where: {
      name: userName,
    },
  });

  if (existUser) callback(null, { exist: true });
  else callback(null, { exist: false });
}
