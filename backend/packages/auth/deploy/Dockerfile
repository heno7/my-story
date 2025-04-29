# build stage

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . . 

RUN npm run db:genClient

RUN npm run compile


# run stage

FROM node:22-alpine 

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY --from=build /app/lib /app/lib

COPY --from=build /app/src/prisma/client /app/lib/prisma/client

EXPOSE 7777

CMD ["node", "/app/lib/index.js"]

