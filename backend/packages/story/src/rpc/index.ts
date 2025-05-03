/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = path.resolve(__dirname, './proto/auth.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const auth: any = grpc.loadPackageDefinition(packageDefinition).auth;

export const authRpcClient = new auth.Auth(
  'auth-service:9999',
  grpc.credentials.createInsecure(),
);
