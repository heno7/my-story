import { PrismaClient } from './client';
export * from './client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export default prisma;
