# build stage

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . . 

# RUN npm run create:db

RUN npx prisma generate

RUN npm run compile

# RUN  cp ./src/prisma/generated/client ./lib/prisma/generated/client

# run stage

FROM node:22-alpine 

WORKDIR /app

COPY package.json .

RUN npm install --only=production

COPY --from=build /app/lib /app/lib

COPY --from=build /app/prisma-client /app/prisma-client

# RUN cp /app/src/prisma/generated/client /app/lib/prisma/generated/client

EXPOSE 7777

CMD ["node", "/app/lib/index.js"]

