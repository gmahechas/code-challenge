FROM node:18-alpine AS builder

ARG port
ARG ppath

WORKDIR /apps

COPY $ppath/package.json $ppath/package-lock.json ./
RUN npm install
COPY $ppath/ ./

RUN npm run build
COPY $ppath/.env $ppath/dist/.env

EXPOSE $port
CMD ["node", "dist"]