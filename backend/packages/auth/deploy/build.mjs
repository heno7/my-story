/* eslint-disable no-undef */
import { build } from 'esbuild';

build({
  entryPoints: ['/app/packages/auth/lib/index.js'],
  bundle: true,
  platform: 'node',
  outfile: '/app/packages/auth/lib/bundle.js',
  // Exclude Node.js built-ins
  external: ['@prisma/client', 'express', 'zod', 'amqplib'],
}).catch(() => process.exit(1));
